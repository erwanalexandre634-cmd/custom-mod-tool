/**
 * MainWorkspace Component
 *
 * This is the main content area that changes based on which sidebar
 * section is active. Displays different editors and views.
 */

import { SidebarSection } from '../types';
import { FileText, FolderOpen, Package, Clock } from 'lucide-react';

interface MainWorkspaceProps {
  activeSection: SidebarSection;
  onNewProject?: () => void;
  onOpenProject?: () => void;
}

export default function MainWorkspace({ activeSection, onNewProject, onOpenProject }: MainWorkspaceProps) {
  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gold mb-4" style={{ color: '#c9a227' }}>
              Welcome to HOI4 Mod Maker Pro
            </h1>
            <p className="mb-12 max-w-2xl mx-auto" style={{ color: '#e0e0e0', fontSize: '16px' }}>
              Create professional Hearts of Iron IV mods through a visual,
              user-friendly interface. No coding knowledge required.
            </p>
            <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* New Project Card */}
              <div
                className="card card-clickable"
                onClick={onNewProject}
                style={{ textAlign: 'left' }}
              >
                <div style={{ marginBottom: '16px' }}>
                  <FileText size={32} color="#c9a227" />
                </div>
                <h3 className="card-title">New Project</h3>
                <p className="card-description">
                  Start a fresh mod from scratch with our guided setup wizard
                </p>
              </div>

              {/* Open Project Card */}
              <div
                className="card card-clickable"
                onClick={onOpenProject}
                style={{ textAlign: 'left' }}
              >
                <div style={{ marginBottom: '16px' }}>
                  <FolderOpen size={32} color="#c9a227" />
                </div>
                <h3 className="card-title">Open Project</h3>
                <p className="card-description">
                  Load an existing .hoi4mod project file to continue editing
                </p>
              </div>

              {/* Import Mod Card */}
              <div
                className="card card-clickable"
                onClick={() => alert('Import Mod functionality coming soon!\n\nThis will allow you to import existing HOI4 mods from game files or .zip archives.')}
                style={{ textAlign: 'left' }}
              >
                <div style={{ marginBottom: '16px' }}>
                  <Package size={32} color="#c9a227" />
                </div>
                <h3 className="card-title">Import Mod</h3>
                <p className="card-description">
                  Import from game files or .zip to edit existing mods
                </p>
              </div>

              {/* Recent Projects Card */}
              <div
                className="card card-clickable"
                onClick={() => alert('Recent Projects functionality coming soon!\n\nThis will show your recently opened projects for quick access.')}
                style={{ textAlign: 'left' }}
              >
                <div style={{ marginBottom: '16px' }}>
                  <Clock size={32} color="#c9a227" />
                </div>
                <h3 className="card-title">Recent Projects</h3>
                <p className="card-description">
                  Quick access to your recently opened mod projects
                </p>
              </div>
            </div>
          </div>
        );

      case 'focus':
        return (
          <div>
            <h2 className="text-3xl font-bold text-hoi4-gold mb-4">
              National Focus Trees
            </h2>
            <p className="text-gray-300 mb-6">
              Create focus trees using the visual node editor. This is where
              React Flow will be integrated for drag-and-drop focus creation.
            </p>
            <div className="bg-hoi4-dark p-8 rounded-lg border border-hoi4-gold/30 h-96 flex items-center justify-center">
              <p className="text-gray-500">Focus Tree Canvas - React Flow integration coming soon</p>
            </div>
          </div>
        );

      case 'country':
        return (
          <div>
            <h2 className="text-3xl font-bold text-hoi4-gold mb-4">
              Country Editor
            </h2>
            <p className="text-gray-300 mb-6">
              Create and edit countries with their flags, colors, politics, and starting conditions.
            </p>
          </div>
        );

      case 'events':
        return (
          <div>
            <h2 className="text-3xl font-bold text-hoi4-gold mb-4">
              Events Editor
            </h2>
            <p className="text-gray-300 mb-6">
              Create country events and news events with triggers and options.
            </p>
          </div>
        );

      case 'ideas':
        return (
          <div>
            <h2 className="text-3xl font-bold text-hoi4-gold mb-4">
              Ideas / National Spirits
            </h2>
            <p className="text-gray-300 mb-6">
              Create national spirits, advisors, and other ideas with modifiers.
            </p>
          </div>
        );

      case 'decisions':
        return (
          <div>
            <h2 className="text-3xl font-bold text-hoi4-gold mb-4">
              Decisions Editor
            </h2>
            <p className="text-gray-300 mb-6">
              Create political, military, and economic decisions for your mod.
            </p>
          </div>
        );

      case 'characters':
        return (
          <div>
            <h2 className="text-3xl font-bold text-hoi4-gold mb-4">
              Characters Editor
            </h2>
            <p className="text-gray-300 mb-6">
              Create leaders, generals, admirals, and advisors with portraits and traits.
            </p>
          </div>
        );

      case 'states':
        return (
          <div>
            <h2 className="text-3xl font-bold text-hoi4-gold mb-4">
              States Editor
            </h2>
            <p className="text-gray-300 mb-6">
              Edit state properties, resources, buildings, and ownership.
            </p>
          </div>
        );

      case 'technology':
        return (
          <div>
            <h2 className="text-3xl font-bold text-hoi4-gold mb-4">
              Technology Editor
            </h2>
            <p className="text-gray-300 mb-6">
              Create custom technologies and doctrines.
            </p>
          </div>
        );

      case 'ideology':
        return (
          <div>
            <h2 className="text-3xl font-bold text-hoi4-gold mb-4">
              Ideology Editor
            </h2>
            <p className="text-gray-300 mb-6">
              Create custom ideologies beyond the base 4.
            </p>
          </div>
        );

      case 'startDates':
        return (
          <div>
            <h2 className="text-3xl font-bold text-hoi4-gold mb-4">
              Start Dates / Bookmarks
            </h2>
            <p className="text-gray-300 mb-6">
              Define custom start dates for your mod.
            </p>
          </div>
        );

      case 'gfx':
        return (
          <div>
            <h2 className="text-3xl font-bold text-hoi4-gold mb-4">
              GFX Manager
            </h2>
            <p className="text-gray-300 mb-6">
              Manage images: focus icons, event pictures, portraits, flags, etc.
            </p>
          </div>
        );

      case 'localisation':
        return (
          <div>
            <h2 className="text-3xl font-bold text-hoi4-gold mb-4">
              Localisation Manager
            </h2>
            <p className="text-gray-300 mb-6">
              Manage translations for all languages.
            </p>
          </div>
        );

      case 'export':
        return (
          <div>
            <h2 className="text-3xl font-bold text-hoi4-gold mb-4">
              Export Mod
            </h2>
            <p className="text-gray-300 mb-6">
              Export your mod to HOI4 folder or as a .zip file.
            </p>
            <div className="bg-hoi4-dark p-6 rounded-lg border border-hoi4-gold/30">
              <h3 className="text-hoi4-gold font-bold mb-4">Export Options</h3>
              <button className="bg-hoi4-gold hover:bg-hoi4-gold/80 text-black font-bold py-2 px-4 rounded mr-4">
                Export to HOI4
              </button>
              <button className="bg-hoi4-blue hover:bg-hoi4-blue/80 text-white font-bold py-2 px-4 rounded">
                Export as .zip
              </button>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div>
            <h2 className="text-3xl font-bold text-hoi4-gold mb-4">
              Settings
            </h2>
            <p className="text-gray-300 mb-6">
              Configure application preferences and HOI4 installation path.
            </p>
          </div>
        );

      default:
        return (
          <div className="text-center">
            <p className="text-gray-400">Select a section from the sidebar</p>
          </div>
        );
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-8">
      {renderContent()}
    </div>
  );
}
