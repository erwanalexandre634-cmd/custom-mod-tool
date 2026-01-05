/**
 * Sidebar Component
 *
 * This is the left navigation sidebar that allows users to switch between
 * different sections of the mod maker (Home, Focus Trees, Events, etc.)
 */

import {
  Home,
  Flag,
  TreePine,
  Calendar,
  Lightbulb,
  CheckSquare,
  Users,
  Map,
  FlaskConical,
  CircleDot,
  CalendarDays,
  Image,
  Languages,
  Package,
  Settings
} from 'lucide-react';
import { SidebarSection } from '../types';

interface SidebarProps {
  activeSection: SidebarSection;
  onSectionChange: (section: SidebarSection) => void;
}

interface SidebarItem {
  id: SidebarSection;
  label: string;
  icon: React.ReactNode;
  dividerAfter?: boolean;
}

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  // Define all sidebar items
  const sidebarItems: SidebarItem[] = [
    { id: 'home', label: 'Home', icon: <Home size={20} /> },
    { id: 'country', label: 'Country', icon: <Flag size={20} /> },
    { id: 'focus', label: 'Focus', icon: <TreePine size={20} /> },
    { id: 'events', label: 'Events', icon: <Calendar size={20} /> },
    { id: 'ideas', label: 'Ideas', icon: <Lightbulb size={20} /> },
    { id: 'decisions', label: 'Decide', icon: <CheckSquare size={20} /> },
    { id: 'characters', label: 'Chars', icon: <Users size={20} /> },
    { id: 'states', label: 'States', icon: <Map size={20} /> },
    { id: 'technology', label: 'Tech', icon: <FlaskConical size={20} /> },
    { id: 'ideology', label: 'Ideol', icon: <CircleDot size={20} /> },
    { id: 'startDates', label: 'Start', icon: <CalendarDays size={20} />, dividerAfter: true },
    { id: 'gfx', label: 'GFX', icon: <Image size={20} /> },
    { id: 'localisation', label: 'Localis', icon: <Languages size={20} /> },
    { id: 'export', label: 'Export', icon: <Package size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="w-48 bg-hoi4-darker border-r border-hoi4-gold/20 flex flex-col">
      {/* Sidebar Header */}
      <div className="p-4 border-b border-hoi4-gold/20">
        <h1 className="text-hoi4-gold font-bold text-lg no-select">
          HOI4 Mod
        </h1>
        <p className="text-gray-400 text-xs no-select">Maker Pro</p>
      </div>

      {/* Sidebar Items */}
      <nav className="flex-1 overflow-y-auto py-2">
        {sidebarItems.map((item) => (
          <div key={item.id}>
            <button
              onClick={() => onSectionChange(item.id)}
              className={`
                w-full px-4 py-3 flex items-center gap-3 text-left
                transition-colors duration-150 no-select
                ${
                  activeSection === item.id
                    ? 'bg-hoi4-gold/20 text-hoi4-gold border-l-4 border-hoi4-gold'
                    : 'text-gray-300 hover:bg-hoi4-dark hover:text-white'
                }
              `}
            >
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </button>
            {item.dividerAfter && (
              <div className="my-2 mx-4 border-t border-hoi4-gold/20" />
            )}
          </div>
        ))}
      </nav>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-hoi4-gold/20">
        <p className="text-xs text-gray-500 no-select">
          v0.1.0
        </p>
      </div>
    </div>
  );
}
