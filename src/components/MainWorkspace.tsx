/**
 * MainWorkspace Component
 *
 * This is the main content area that changes based on which sidebar
 * section is active. For now, it shows placeholder content for each section.
 */

import { SidebarSection } from '../types';

interface MainWorkspaceProps {
  activeSection: SidebarSection;
}

export default function MainWorkspace({ activeSection }: MainWorkspaceProps) {
  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="text-center">
            <h1 className="text-4xl font-bold text-hoi4-gold mb-4">
              Welcome to HOI4 Mod Maker Pro
            </h1>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Create professional Hearts of Iron IV mods through a visual,
              user-friendly interface. No coding knowledge required.
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
              <div className="bg-hoi4-dark p-6 rounded-lg border border-hoi4-gold/30">
                <h3 className="text-hoi4-gold font-bold mb-2">New Project</h3>
                <p className="text-gray-400 text-sm">
                  Start a fresh mod from scratch
                </p>
              </div>
              <div className="bg-hoi4-dark p-6 rounded-lg border border-hoi4-gold/30">
                <h3 className="text-hoi4-gold font-bold mb-2">Open Project</h3>
                <p className="text-gray-400 text-sm">
                  Load an existing .hoi4mod file
                </p>
              </div>
              <div className="bg-hoi4-dark p-6 rounded-lg border border-hoi4-gold/30">
                <h3 className="text-hoi4-gold font-bold mb-2">Import Mod</h3>
                <p className="text-gray-400 text-sm">
                  Import from game files or .zip
                </p>
              </div>
              <div className="bg-hoi4-dark p-6 rounded-lg border border-hoi4-gold/30">
                <h3 className="text-hoi4-gold font-bold mb-2">Recent Projects</h3>
                <p className="text-gray-400 text-sm">
                  View your recent work
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
