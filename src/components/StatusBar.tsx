/**
 * StatusBar Component
 *
 * Displays application status at the bottom of the window:
 * - Left side: Status indicator, current project name
 * - Right side: Version information
 */

interface StatusBarProps {
  status?: 'ready' | 'working' | 'error';
  projectName?: string;
}

export default function StatusBar({ status = 'ready', projectName }: StatusBarProps) {
  return (
    <div className="status-bar no-select">
      <div className="status-left">
        {/* Status Indicator */}
        <div className="status-item">
          <div
            className={`status-indicator ${status === 'working' ? 'warning' : status === 'error' ? 'error' : ''}`}
          />
          <span>
            {status === 'ready' && 'Ready'}
            {status === 'working' && 'Working...'}
            {status === 'error' && 'Error'}
          </span>
        </div>

        {/* Project Name */}
        <div className="status-item">
          <span>Project:</span>
          <span>{projectName || 'No project loaded'}</span>
        </div>
      </div>

      {/* Version */}
      <div className="status-right">
        HOI4 Mod Maker Pro v0.1.0
      </div>
    </div>
  );
}
