/**
 * NewProjectModal Component
 *
 * Modal dialog for creating a new HOI4 mod project.
 * Collects: name, internal ID, author, game version, tags
 */

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export interface ProjectConfig {
  name: string;
  internalId: string;
  author: string;
  gameVersion: string;
  tags: string[];
}

interface NewProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateProject: (config: ProjectConfig) => void;
}

const AVAILABLE_TAGS = [
  'Alternative History',
  'Gameplay',
  'Graphics',
  'Map',
  'Military',
  'National Focuses',
  'Events',
  'Historical',
  'Total Conversion',
];

const HOI4_VERSIONS = [
  '1.14.*',
  '1.13.*',
  '1.12.*',
  '1.11.*',
  '1.10.*',
];

export default function NewProjectModal({ isOpen, onClose, onCreateProject }: NewProjectModalProps) {
  const [name, setName] = useState('');
  const [internalId, setInternalId] = useState('');
  const [author, setAuthor] = useState('');
  const [gameVersion, setGameVersion] = useState('1.14.*');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [manualIdEdit, setManualIdEdit] = useState(false);

  // Auto-generate internal ID from name (unless manually edited)
  useEffect(() => {
    if (!manualIdEdit && name) {
      const generated = name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '_')
        .replace(/^_+|_+$/g, '');
      setInternalId(generated);
    }
  }, [name, manualIdEdit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Mod name is required';
    }

    if (!internalId.trim()) {
      newErrors.internalId = 'Internal ID is required';
    } else if (!/^[a-z0-9_]+$/.test(internalId)) {
      newErrors.internalId = 'Internal ID can only contain lowercase letters, numbers, and underscores';
    }

    if (!author.trim()) {
      newErrors.author = 'Author name is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Create project
    onCreateProject({
      name: name.trim(),
      internalId: internalId.trim(),
      author: author.trim(),
      gameVersion,
      tags: selectedTags,
    });

    // Reset form
    setName('');
    setInternalId('');
    setAuthor('');
    setGameVersion('1.14.*');
    setSelectedTags([]);
    setErrors({});
    setManualIdEdit(false);
  };

  const handleClose = () => {
    // Reset form when closing
    setName('');
    setInternalId('');
    setAuthor('');
    setGameVersion('1.14.*');
    setSelectedTags([]);
    setErrors({});
    setManualIdEdit(false);
    onClose();
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <h2 className="modal-title">Create New Mod Project</h2>
          <button className="modal-close" onClick={handleClose} title="Close">
            <X size={20} />
          </button>
        </div>

        {/* Body - Form */}
        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            {/* Mod Name */}
            <div className="form-group">
              <label className="form-label form-label-required" htmlFor="mod-name">
                Mod Name
              </label>
              <input
                type="text"
                id="mod-name"
                className="form-input"
                placeholder="My Awesome HOI4 Mod"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
              {errors.name && <div className="form-error">{errors.name}</div>}
              <div className="form-helper">The display name of your mod as it appears in the game launcher</div>
            </div>

            {/* Internal ID */}
            <div className="form-group">
              <label className="form-label form-label-required" htmlFor="mod-id">
                Internal ID
              </label>
              <input
                type="text"
                id="mod-id"
                className="form-input"
                placeholder="my_awesome_mod"
                value={internalId}
                onChange={(e) => {
                  setInternalId(e.target.value);
                  setManualIdEdit(true);
                }}
              />
              {errors.internalId && <div className="form-error">{errors.internalId}</div>}
              <div className="form-helper">
                Lowercase letters, numbers, and underscores only. Auto-generated from name.
              </div>
            </div>

            {/* Author */}
            <div className="form-group">
              <label className="form-label form-label-required" htmlFor="mod-author">
                Author
              </label>
              <input
                type="text"
                id="mod-author"
                className="form-input"
                placeholder="Your Name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
              {errors.author && <div className="form-error">{errors.author}</div>}
              <div className="form-helper">Your name or username as the mod creator</div>
            </div>

            {/* Game Version */}
            <div className="form-group">
              <label className="form-label" htmlFor="mod-version">
                HOI4 Version
              </label>
              <select
                id="mod-version"
                className="form-select"
                value={gameVersion}
                onChange={(e) => setGameVersion(e.target.value)}
              >
                {HOI4_VERSIONS.map((version) => (
                  <option key={version} value={version}>
                    {version}
                  </option>
                ))}
              </select>
              <div className="form-helper">The Hearts of Iron IV version your mod supports</div>
            </div>

            {/* Tags */}
            <div className="form-group">
              <label className="form-label">Tags (Optional)</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                {AVAILABLE_TAGS.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: '4px',
                      border: '1px solid',
                      borderColor: selectedTags.includes(tag) ? '#c9a227' : '#2a2a3e',
                      background: selectedTags.includes(tag) ? 'rgba(201, 162, 39, 0.2)' : 'transparent',
                      color: selectedTags.includes(tag) ? '#c9a227' : '#888888',
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontWeight: 500,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <div className="form-helper">Categories that describe your mod</div>
            </div>
          </div>

          {/* Footer - Actions */}
          <div className="modal-footer">
            <button type="button" className="btn-secondary" onClick={handleClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
