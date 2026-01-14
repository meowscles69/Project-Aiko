import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="mb-24 py-12 scroll-mt-24">
      <div className="text-center max-w-4xl mx-auto px-4">
        <div className="mb-10 flex justify-center animate-bounce-slow">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-red-500 shadow-2xl shadow-red-500/40 relative">
            <img 
              src="https://raw.githubusercontent.com/meowscles69/NeuraPay/main/aiko.png" 
              alt="AIKO" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent"></div>
          </div>
        </div>
        <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-red-500 via-red-400 to-red-200 bg-clip-text text-transparent tracking-tight">
          Chat with AIKO
        </h2>
        <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
          Your intelligent AI companion powered by ElizaCloud. Experience deep, natural conversations with AIKO - always on, always smart.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://www.elizacloud.ai/dashboard/chat?characterId=7e2cd7ce-6ab5-4645-b49c-46d4c6f6651e" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto px-10 py-5 bg-red-500 hover:bg-red-600 text-white font-black rounded-xl transition-all shadow-xl shadow-red-500/30 text-xl flex items-center justify-center group active:scale-[0.98]"
          >
            Start Chatting
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a 
            href="https://dexscreener.com/solana/FEBN3FaRBTznLgpxNqZrnH929JwGVay4E4UQW1vep7ik" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto px-10 py-5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-bold rounded-xl transition-all text-xl active:scale-[0.98]"
          >
            Trade $AIKO
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;