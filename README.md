# HOI4 Mod Maker Pro

A professional desktop application for creating Hearts of Iron IV mods through a visual, user-friendly interface. No coding knowledge required!

## Project Overview

This application is built with:
- **Frontend**: React + TypeScript + Tailwind CSS + React Flow
- **Backend**: Rust + Tauri
- **Build Tool**: Vite

## Features

### Phase 1 - Foundation & UI (✅ COMPLETED)
- [x] Project setup with Tauri + React + TypeScript
- [x] Tailwind CSS with professional HOI4-inspired theme
- [x] Sidebar navigation with smooth transitions
- [x] Routing between sections
- [x] Data model definitions
- [x] **Professional button styles (gold gradients, hover effects)**
- [x] **Beautiful clickable cards with animations**
- [x] **StatusBar component showing project status**
- [x] **NewProjectModal with form validation**
- [x] **Project state management**
- [x] **Fully functional home screen**

### Phase 2 - Core Editors (Next)
- [ ] Localisation system
- [ ] Condition Builder component
- [ ] Effect Builder component
- [ ] Ideas Editor
- [ ] Events Editor

### Phase 3 - Focus Tree Editor (Main Feature)
- [ ] Visual node-based editor with React Flow
- [ ] Drag & drop focus nodes
- [ ] Prerequisite connections
- [ ] Focus properties panel
- [ ] Import/export focus trees

### Phase 4+ - Advanced Features
- [ ] Country Editor
- [ ] Character Editor
- [ ] Decisions Editor
- [ ] States Editor
- [ ] Technology Editor
- [ ] GFX Manager
- [ ] Export system with validation

## Project Structure

```
hoi4-mod-maker-pro/
├── src/                    # React frontend source
│   ├── components/         # React components
│   │   ├── Sidebar.tsx    # Left navigation sidebar
│   │   └── MainWorkspace.tsx  # Main content area
│   ├── types.ts           # TypeScript type definitions
│   ├── App.tsx            # Root React component
│   ├── main.tsx           # React entry point
│   └── index.css          # Global styles + Tailwind
├── src-tauri/             # Rust backend source
│   ├── src/
│   │   ├── lib.rs         # Main Rust library with Tauri commands
│   │   └── main.rs        # Rust entry point
│   ├── Cargo.toml         # Rust dependencies
│   ├── tauri.conf.json    # Tauri configuration
│   └── build.rs           # Rust build script
├── public/                # Static assets
├── dist/                  # Built frontend (generated)
├── index.html             # HTML entry point
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Node.js dependencies and scripts
```

## 🚀 Quick Start

### Running the Application

```bash
# Install dependencies (first time only)
npm install

# Run in development mode
npm run tauri dev
```

The application window will open, and you can:
- ✨ Click "New Project" to open the beautiful modal dialog
- ✨ Fill out the form and create a project
- ✨ Watch the status bar update with your project name
- ✨ Navigate through different sections using the sidebar
- ✨ Experience smooth animations and hover effects

### Building for Windows

See **[BUILD_INSTRUCTIONS.md](./BUILD_INSTRUCTIONS.md)** for detailed steps to build the .exe file on Windows.

Quick version:
```bash
npm run tauri build
```

This creates:
- `src-tauri/target/release/hoi4-mod-maker-pro.exe` (portable executable)
- Installer in `src-tauri/target/release/bundle/nsis/`

## Development Setup

### Prerequisites

You need to have installed:
- **Node.js** (v16 or later) - JavaScript runtime
- **npm** (comes with Node.js) - Package manager
- **Rust** (latest stable) - Systems programming language
- **Cargo** (comes with Rust) - Rust package manager

### Installation

1. **Clone the repository** (if from git):
   ```bash
   git clone <repository-url>
   cd custom-mod-tool
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run tauri dev
   ```

   This will:
   - Start the Vite dev server (React frontend) on port 1420
   - Compile the Rust backend
   - Open the desktop application window
   - Enable hot-reload for development

### Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server only (for frontend testing) |
| `npm run build` | Build the React frontend for production |
| `npm run tauri dev` | Run the full Tauri app in development mode |
| `npm run tauri build` | Build the production .exe (Windows), .app (macOS), or binary (Linux) |

## How to Build the Final .exe

To create a distributable Windows executable:

```bash
npm run tauri build
```

This will:
1. Build the React frontend in production mode
2. Compile the Rust backend with optimizations
3. Bundle everything into a Windows executable
4. Create an installer (NSIS or MSI)

The built files will be in:
- **Executable**: `src-tauri/target/release/hoi4-mod-maker-pro.exe`
- **Installer**: `src-tauri/target/release/bundle/`

## File Explanations

### Frontend Files

- **`vite.config.ts`**: Configures Vite build tool. Sets up React plugin and Tauri-specific settings (port 1420, watch exclusions).

- **`tsconfig.json`**: TypeScript compiler configuration. Enables strict type checking and modern JavaScript features.

- **`tailwind.config.js`**: Tailwind CSS configuration. Defines custom HOI4-inspired color palette (dark backgrounds, gold accents).

- **`postcss.config.js`**: PostCSS configuration. Integrates Tailwind CSS into the build pipeline.

- **`index.html`**: Entry HTML file. Contains the root div where React renders.

- **`src/main.tsx`**: React entry point. Renders the App component into the DOM.

- **`src/App.tsx`**: Root React component. Manages sidebar navigation state and overall layout.

- **`src/components/Sidebar.tsx`**: Left navigation sidebar with all section links (Home, Focus, Events, etc.).

- **`src/components/MainWorkspace.tsx`**: Main content area that changes based on active sidebar section.

- **`src/types.ts`**: TypeScript type definitions for all data structures (Project, Focus, Event, etc.).

- **`src/index.css`**: Global CSS with Tailwind directives, custom scrollbar, and base styles.

### Backend Files (Rust)

- **`src-tauri/tauri.conf.json`**: Main Tauri configuration. Defines window properties, app metadata, and build settings.

- **`src-tauri/Cargo.toml`**: Rust package manifest. Lists dependencies (Tauri, plugins, serde for JSON).

- **`src-tauri/build.rs`**: Rust build script. Called by Cargo before compilation to generate code.

- **`src-tauri/src/lib.rs`**: Main Rust library. Defines Tauri commands (functions callable from JavaScript):
  - `greet(name)`: Example command
  - `save_project(project, path)`: Saves a project file
  - `load_project(path)`: Loads a project file

- **`src-tauri/src/main.rs`**: Rust binary entry point. Calls the library's `run()` function.

### Configuration Files

- **`package.json`**: Node.js package configuration. Lists all npm dependencies and defines scripts.

## How the Pieces Connect

1. **Starting the App**:
   - User runs `npm run tauri dev`
   - Tauri starts two processes:
     a. Vite dev server (serves React frontend on http://localhost:1420)
     b. Rust backend (native desktop window)

2. **Frontend Rendering**:
   - Browser loads `index.html`
   - HTML loads `src/main.tsx` (via Vite)
   - `main.tsx` renders `<App />` component
   - `App` renders `<Sidebar />` and `<MainWorkspace />`
   - User clicks sidebar items, state updates, workspace content changes

3. **Frontend-Backend Communication**:
   - React components import `@tauri-apps/api`
   - Call Rust functions: `await invoke('greet', { name: 'User' })`
   - Rust functions in `lib.rs` execute (file system, system info, etc.)
   - Results return to React as Promises

4. **Building for Production**:
   - `npm run tauri build` runs:
     a. `npm run build` → Vite builds React to `dist/` folder
     b. `cargo build --release` → Compiles Rust with optimizations
     c. Tauri bundles `dist/` + Rust binary into `.exe`
     d. Creates installer with NSIS or Windows Installer

## Next Steps

1. **Implement Core Components**:
   - Condition Builder (visual trigger editor)
   - Effect Builder (visual effect editor)
   - Localisation Manager

2. **Build Focus Tree Editor**:
   - Integrate React Flow
   - Create custom focus node components
   - Implement drag & drop
   - Add connection logic

3. **Add File Operations**:
   - Implement save/load in Rust
   - Add HOI4 script generation
   - Create export system

4. **Polish UI**:
   - Add tooltips
   - Implement auto-save
   - Add validation
   - Create settings panel

## Color Palette

The app uses a HOI4-inspired dark theme:

- **Background Dark**: `#1a1a2e`
- **Background Darker**: `#0f0f1a`
- **Gold (accent)**: `#c9a227`
- **Blue (highlights)**: `#4a90d9`
- **Red (errors)**: `#d64545`
- **Green (success)**: `#45d645`

## Keyboard Shortcuts (Planned)

- `Ctrl+S`: Save project
- `Ctrl+Shift+S`: Save as
- `Ctrl+E`: Export mod
- `Ctrl+Z`: Undo
- `Ctrl+Y`: Redo
- `F5`: Validate mod
- `F1`: Help

## Testing

To test during development:
1. Run `npm run tauri dev`
2. Application window opens
3. Click sidebar items to switch sections
4. Check that the UI looks correct
5. Monitor console for errors

## Troubleshooting

**Issue**: `npm run tauri dev` fails to start
- **Solution**: Make sure both Node.js and Rust are installed. Run `node --version`, `npm --version`, `rustc --version`, `cargo --version` to verify.

**Issue**: Changes not showing in dev mode
- **Solution**: Vite has hot-reload enabled. If it doesn't work, restart `npm run tauri dev`.

**Issue**: Build fails with Rust errors
- **Solution**: Run `cd src-tauri && cargo clean` to clean build cache, then try again.

**Issue**: Tailwind classes not working
- **Solution**: Make sure the file is listed in `tailwind.config.js` content array.

## License

ISC

## Author

Created as a comprehensive Hearts of Iron IV mod creation tool.
