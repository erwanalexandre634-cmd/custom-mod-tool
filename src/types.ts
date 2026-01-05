// Main data types for HOI4 Mod Maker Pro

// Represents the entire project
export interface Project {
  name: string;
  version: string;
  metadata: ProjectMetadata;
  countries: Country[];
  focusTrees: FocusTree[];
  events: Event[];
  decisions: Decision[];
  ideas: Idea[];
  characters: Character[];
  // ... other data will be added as we build
}

// Mod metadata (descriptor.mod)
export interface ProjectMetadata {
  name: string;
  internalId: string;
  gameVersion: string;
  tags: string[];
  author: string;
  thumbnail?: string;
  dependencies?: string[];
}

// Country definition
export interface Country {
  tag: string;
  name: string;
  adjective: string;
  graphicalCulture: string;
  color: {
    r: number;
    g: number;
    b: number;
  };
}

// National Focus Tree
export interface FocusTree {
  id: string;
  country: string;
  focuses: Focus[];
}

// Individual Focus
export interface Focus {
  id: string;
  name: string;
  description: string;
  icon: string;
  cost: number;
  x: number;
  y: number;
  prerequisites: string[][];
  mutuallyExclusive: string[];
  available: Condition[];
  completionReward: Effect[];
}

// Event definition
export interface Event {
  id: string;
  type: 'country' | 'news';
  title: string;
  description: string;
  picture?: string;
  trigger: Condition[];
  options: EventOption[];
}

export interface EventOption {
  name: string;
  effects: Effect[];
}

// Decision definition
export interface Decision {
  id: string;
  name: string;
  description: string;
  category: string;
  cost: number;
  available: Condition[];
  effects: Effect[];
}

// Idea/National Spirit
export interface Idea {
  id: string;
  name: string;
  description: string;
  category: string;
  icon?: string;
  modifiers: Modifier[];
}

// Character (leader, general, advisor, etc.)
export interface Character {
  id: string;
  name: string;
  country: string;
  portraits: {
    civilian?: string;
    army?: string;
  };
  roles: CharacterRole[];
}

export interface CharacterRole {
  type: 'leader' | 'general' | 'admiral' | 'advisor';
  traits: string[];
}

// Modifier (e.g., +10% production speed)
export interface Modifier {
  type: string;
  value: number;
}

// Condition (trigger)
export interface Condition {
  type: string;
  operator?: string;
  value?: any;
  conditions?: Condition[]; // For nested conditions
}

// Effect (what happens)
export interface Effect {
  type: string;
  value?: any;
  effects?: Effect[]; // For scoped effects
}

// UI State
export type SidebarSection =
  | 'home'
  | 'country'
  | 'focus'
  | 'events'
  | 'ideas'
  | 'decisions'
  | 'characters'
  | 'states'
  | 'technology'
  | 'ideology'
  | 'startDates'
  | 'gfx'
  | 'localisation'
  | 'export'
  | 'settings';
