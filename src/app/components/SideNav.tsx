import { Shield, Users, BookOpen, FileText, Scale } from 'lucide-react';
import type { TabId } from '../App';

interface SideNavProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
}

interface NavItem {
  id: TabId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { id: 'about', label: 'Про Департамент Шерифів', icon: Shield },
  { id: 'departments', label: 'Відділи', icon: Users },
  { id: 'lectures', label: 'База даних лекцій', icon: BookOpen },
  { id: 'statute', label: 'Внутрішній статут', icon: FileText },
];

export function SideNav({ activeTab, onTabChange }: SideNavProps) {
  return (
    <div className="w-80 bg-[#121212] border-r border-[#2a2a2a] flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-[#2a2a2a]">
        <div className="flex items-center gap-3 mb-2">
          <Shield className="size-10 text-[#d4af37]" strokeWidth={1.5} />
          <div>
            <h1 className="text-xl font-bold text-white tracking-wide">ДЕПАРТАМЕНТ ШЕРИФІВ</h1>
            <p className="text-sm text-[#888] mt-0.5">Округ Лос Сантос</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-[#d4af37] text-black font-medium'
                    : 'text-[#aaa] hover:bg-[#1a1a1a] hover:text-white'
                }`}
              >
                <Icon className="size-5" strokeWidth={1.5} />
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Footer with External Link */}
      <div className="p-4 border-t border-[#2a2a2a]">
        <a
          href="https://satael.github.io/StakeRP-codex/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-[#1a1a1a] text-[#aaa] hover:bg-[#222] hover:text-white transition-all"
        >
          <Scale className="size-5" strokeWidth={1.5} />
          <span className="text-sm">Законодавча база Сан-Андреас</span>
        </a>
      </div>
    </div>
  );
}
