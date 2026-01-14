import React from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="mb-24 scroll-mt-24">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-white tracking-tight">$AIKO Ecosystem</h2>
        <div className="flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-500 text-xs font-bold animate-pulse">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          Live Data
        </div>
      </div>
      
      {/* Chart Section */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-4 mb-10 shadow-2xl overflow-hidden group hover:border-red-500/30 transition-all">
        <div className="relative w-full h-[600px] rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
           <iframe 
                src="https://dexscreener.com/solana/FEBN3FaRBTznLgpxNqZrnH929JwGVay4E4UQW1vep7ik?embed=1&theme=dark&trades=0&info=0"
                className="w-full h-full border-0 rounded-xl"
                allowFullScreen
            ></iframe>
            <div className="absolute top-4 right-4">
              <a 
                href="https://dexscreener.com/solana/FEBN3FaRBTznLgpxNqZrnH929JwGVay4E4UQW1vep7ik" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-black/60 hover:bg-red-500 transition-colors rounded-lg backdrop-blur-sm"
              >
                <ExternalLink size={18} />
              </a>
            </div>
        </div>
      </div>
      
      {/* Token Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 hover:border-red-500/40 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] hover:translate-y-[-4px] transition-all group">
          <div className="text-xs font-bold text-zinc-500 mb-2 uppercase tracking-widest">Contract Address</div>
          <div className="text-sm font-mono text-white break-all bg-zinc-900 p-3 rounded-lg border border-zinc-800 select-all mb-4">
            2tgZJ6N7buMDq9HZWbzXvSPFq6MYWbrAGCoDD22Ypump
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-600">Solana Network</span>
            <span className="text-xs text-green-500 font-bold">Verified</span>
          </div>
        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 hover:border-red-500/40 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] hover:translate-y-[-4px] transition-all flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold text-zinc-500 mb-2 uppercase tracking-widest">Market Status</div>
            <div className="text-2xl font-black text-white mb-2 tracking-tight">Live Trading</div>
          </div>
          <a 
            href="https://dexscreener.com/solana/FEBN3FaRBTznLgpxNqZrnH929JwGVay4E4UQW1vep7ik" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-bold transition-colors mt-4"
          >
            <span>Execute Swap</span>
            <ExternalLink size={16} />
          </a>
        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 hover:border-red-500/40 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] hover:translate-y-[-4px] transition-all">
          <div className="text-xs font-bold text-zinc-500 mb-2 uppercase tracking-widest">Performance</div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-black text-red-500 tracking-tighter">AI-Driven</span>
          </div>
          <div className="text-xs text-zinc-500 mt-4 leading-relaxed font-medium">
            Autonomous growth and engagement via decentralized AI infrastructure.
          </div>
        </div>
      </div>
      
      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <MetricCard label="Total Market Value" value="$2.4M" change="+12.5% week" color="red" />
        <MetricCard label="Active Positions" value="12" change="Across AI & Tech" color="white" />
        <MetricCard label="24h Volume" value="$847K" change="High activity" color="blue" />
      </div>
    </section>
  );
};

const MetricCard: React.FC<{ label: string; value: string; change: string; color: string }> = ({ label, value, change, color }) => {
  const colorMap: Record<string, string> = {
    red: 'text-red-500',
    white: 'text-white',
    blue: 'text-blue-500'
  };

  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 border-l-4 border-l-zinc-800 hover:border-l-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.1)] hover:translate-y-[-4px] transition-all">
      <div className="text-sm font-bold text-zinc-500 mb-3 tracking-wide">{label}</div>
      <div className={`text-4xl font-black mb-2 tracking-tighter ${colorMap[color]}`}>{value}</div>
      <div className={`text-xs font-bold ${color === 'red' ? 'text-green-500' : 'text-zinc-500'}`}>{change}</div>
    </div>
  );
};

export default Portfolio;