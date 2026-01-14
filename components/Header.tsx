
import React from 'react';
import { ChartLine, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-20 right-0 h-16 bg-black border-b border-zinc-800 flex items-center justify-between px-6 z-40 backdrop-blur-md bg-black/80">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold text-white tracking-tighter">AIKO</h1>
        <span className="hidden sm:inline text-sm text-zinc-500 font-medium">Powered by ElizaCloud • AI Chat Character</span>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <a 
          href="https://dexscreener.com/solana/FEBN3FaRBTznLgpxNqZrnH929JwGVay4E4UQW1vep7ik" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-3 sm:px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white text-xs sm:text-sm font-semibold transition-all flex items-center gap-2"
        >
          <ChartLine size={16} />
          <span className="hidden xs:inline">$AIKO Chart</span>
        </a>
        
        <a 
          href="https://www.elizacloud.ai/dashboard/chat?characterId=7e2cd7ce-6ab5-4645-b49c-46d4c6f6651e" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-4 sm:px-6 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white text-xs sm:text-sm font-bold transition-all shadow-lg shadow-red-500/20"
        >
          Chat
        </a>

        <button className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors border border-zinc-800">
          <Menu size={20} className="text-zinc-400" />
        </button>
      </div>
    </header>
  );
};

export default Header;
