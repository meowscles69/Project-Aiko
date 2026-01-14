
import React from 'react';
import { Twitter, Users } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-24 pt-12 border-t border-zinc-800">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4">
        <div className="flex flex-wrap items-center justify-center gap-8">
          <a href="#" className="text-sm font-bold text-zinc-500 hover:text-red-500 transition-colors uppercase tracking-widest">About</a>
          <a href="#" className="text-sm font-bold text-zinc-500 hover:text-red-500 transition-colors uppercase tracking-widest">Privacy</a>
          <a href="#" className="text-sm font-bold text-zinc-500 hover:text-red-500 transition-colors uppercase tracking-widest">Terms</a>
          <a href="#" className="text-sm font-bold text-zinc-500 hover:text-red-500 transition-colors uppercase tracking-widest">API</a>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-6">
          <span className="text-xs font-bold text-zinc-600 uppercase tracking-widest">Market Feed: Polymarket API</span>
          <div className="flex items-center gap-6">
            <a 
              href="https://x.com/ai16zaiko" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-500 hover:text-red-500 transition-colors"
              title="Follow AIKO"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="https://x.com/i/communities/2004459771244827038" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-500 hover:text-red-500 transition-colors"
              title="Community Hub"
            >
              <Users size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-12 pb-8">
        <p className="text-[10px] text-zinc-700 font-bold uppercase tracking-[0.3em]">
          © 2026 AIKO Autonomous Agent • Built for Decentralized Intelligence
        </p>
      </div>
    </footer>
  );
};

export default Footer;
