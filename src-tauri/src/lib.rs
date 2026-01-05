// This is the main Rust backend library for the HOI4 Mod Maker
// It handles:
// - File system operations (saving/loading project files)
// - Exporting mods to the correct format
// - System integration (finding HOI4 installation path)

use serde::{Deserialize, Serialize};
use tauri::Manager;

// Example: Project data structure
#[derive(Debug, Serialize, Deserialize)]
pub struct Project {
    pub name: String,
    pub version: String,
    pub metadata: ProjectMetadata,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct ProjectMetadata {
    pub game_version: String,
    pub tags: Vec<String>,
    pub author: String,
}

// Tauri command to greet (example command)
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! Welcome to HOI4 Mod Maker Pro!", name)
}

// Tauri command to save a project
#[tauri::command]
async fn save_project(project: Project, path: String) -> Result<String, String> {
    // In a real implementation, we would:
    // 1. Serialize the project to JSON
    // 2. Write to the specified path
    // 3. Return success or error

    Ok(format!("Project '{}' would be saved to: {}", project.name, path))
}

// Tauri command to load a project
#[tauri::command]
async fn load_project(path: String) -> Result<Project, String> {
    // In a real implementation, we would:
    // 1. Read the file from the specified path
    // 2. Deserialize JSON to Project struct
    // 3. Return the project or error

    Ok(Project {
        name: "Example Project".to_string(),
        version: "0.1.0".to_string(),
        metadata: ProjectMetadata {
            game_version: "1.14.*".to_string(),
            tags: vec!["Alternative History".to_string()],
            author: "You".to_string(),
        },
    })
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_dialog::init())
        .invoke_handler(tauri::generate_handler![
            greet,
            save_project,
            load_project
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
