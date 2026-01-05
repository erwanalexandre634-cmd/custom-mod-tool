/**
 * App Component
 *
 * This is the root component of the application.
 * It manages the overall layout (sidebar + main workspace) and
 * handles state for which section is currently active.
 */

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainWorkspace from './components/MainWorkspace';
import { SidebarSection } from './types';

function App() {
  // State to track which sidebar section is currently active
  const [activeSection, setActiveSection] = useState<SidebarSection>('home');

  return (
    <div className="flex h-screen bg-hoi4-dark text-white overflow-hidden">
      {/* Left Sidebar Navigation */}
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* Main Content Area */}
      <MainWorkspace activeSection={activeSection} />

      {/* Status Bar at the bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-hoi4-darker border-t border-hoi4-gold/20 px-4 py-2 flex items-center justify-between no-select">
        <div className="text-xs text-gray-400">
          <span>Status: Ready</span>
          <span className="ml-4">•</span>
          <span className="ml-4">Project: No project loaded</span>
        </div>
        <div className="text-xs text-gray-400">
          HOI4 Mod Maker Pro v0.1.0
        </div>
      </div>
    </div>
  );
}

export default App;
