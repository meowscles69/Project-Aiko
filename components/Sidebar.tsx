
import React from 'react';
import { Coins, Sparkles, MessageCircle, TrendingUp } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onNavigate }) => {
  const isItemActive = (ids: string[]) => ids.includes(activeSection);

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 bg-black border-r border-zinc-800 flex flex-col items-center py-6 z-50">
      <div 
        className="w-14 h-14 rounded-full mb-8 cursor-pointer hover:scale-105 transition-transform overflow-hidden border-2 border-red-500/50"
        onClick={() => onNavigate('hero')}
      >
        <img 
          src="https://raw.githubusercontent.com/meowscles69/NeuraPay/main/aiko.png" 
          alt="AIKO" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <nav className="flex-1 flex flex-col gap-4 w-full px-2">
        <SidebarItem 
          icon={<Coins size={20} />} 
          label="$AIKO" 
          subLabel="Token" 
          active={isItemActive(['portfolio'])} 
          onClick={() => onNavigate('portfolio')}
        />
        
        <SidebarItem 
          icon={<Sparkles size={20} />} 
          label="Features" 
          subLabel="12" 
          active={activeSection === 'features'} 
          onClick={() => onNavigate('features')}
        />
        
        <SidebarItem 
          icon={<MessageCircle size={20} />} 
          label="Community" 
          active={activeSection === 'community'} 
          onClick={() => onNavigate('community')}
        />
        
        <SidebarItem 
          icon={<TrendingUp size={20} />} 
          label="Markets" 
          active={activeSection === 'markets'} 
          onClick={() => onNavigate('markets')}
        />
      </nav>

      <div className="mt-auto">
        {/* Wallet connection or bottom element removed per request */}
      </div>
    </aside>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  subLabel?: string;
  active: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, subLabel, active, onClick }) => {
  return (
    <div 
      className={`group flex flex-col items-center py-3 rounded-lg cursor-pointer transition-all duration-200 border-l-2 ${
        active 
          ? 'bg-red-500/10 border-red-500 text-red-500' 
          : 'border-transparent text-zinc-400 hover:bg-zinc-900 hover:text-white'
      }`}
      onClick={onClick}
    >
      <div className={`${active ? 'text-red-500' : 'text-zinc-400 group-hover:text-white'}`}>
        {icon}
      </div>
      <span className="text-[10px] text-zinc-400 mt-1">{label}</span>
      {subLabel && <span className={`text-xs font-bold mt-1 ${active ? 'text-red-500' : 'text-zinc-500'}`}>{subLabel}</span>}
    </div>
  );
};

export default Sidebar;
