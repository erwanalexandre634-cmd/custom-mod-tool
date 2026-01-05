/**
 * App Component
 *
 * This is the root component of the application.
 * It manages:
 * - Overall layout (sidebar + main workspace + status bar)
 * - Active section navigation
 * - Project state (current project, if any)
 * - Modal state (new project modal, etc.)
 */

import { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainWorkspace from './components/MainWorkspace';
import StatusBar from './components/StatusBar';
import NewProjectModal, { ProjectConfig } from './components/NewProjectModal';
import { SidebarSection } from './types';

function App() {
  // Navigation state
  const [activeSection, setActiveSection] = useState<SidebarSection>('home');

  // Project state
  const [currentProject, setCurrentProject] = useState<ProjectConfig | null>(null);

  // Modal state
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);

  // Handler for creating a new project
  const handleCreateProject = (config: ProjectConfig) => {
    setCurrentProject(config);
    setIsNewProjectModalOpen(false);
    // Optionally switch to a different section after creating project
    // setActiveSection('focus'); // For example, go to focus tree editor
  };

  // Handler for opening new project modal
  const handleNewProject = () => {
    setIsNewProjectModalOpen(true);
  };

  // Handler for opening existing project
  const handleOpenProject = () => {
    // TODO: Implement file dialog to open .hoi4mod file
    alert('Open Project functionality coming soon!\n\nThis will use Tauri\'s file dialog to select a .hoi4mod file.');
  };

  return (
    <div className="flex h-screen bg-hoi4-dark text-white overflow-hidden">
      {/* Left Sidebar Navigation */}
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      {/* Main Content Area */}
      <MainWorkspace
        activeSection={activeSection}
        onNewProject={handleNewProject}
        onOpenProject={handleOpenProject}
      />

      {/* Status Bar at the bottom */}
      <StatusBar
        status="ready"
        projectName={currentProject?.name}
      />

      {/* New Project Modal */}
      <NewProjectModal
        isOpen={isNewProjectModalOpen}
        onClose={() => setIsNewProjectModalOpen(false)}
        onCreateProject={handleCreateProject}
      />
    </div>
  );
}

export default App;
