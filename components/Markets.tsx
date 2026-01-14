
import React from 'react';
import { Bookmark, Eye } from 'lucide-react';

const Markets: React.FC = () => {
  const markets = [
    { 
      id: '1', 
      title: 'Largest Company end of June', 
      handle: '@nvidia2026', 
      category: 'Tech Giants', 
      value: '$624K', 
      addr: '0x2F5e368...4c2d1b', 
      icon: '🚀', 
      link: 'https://polymarket.com/event/largest-company-end-of-june-712' 
    },
    { 
      id: '2', 
      title: 'Largest Company end of December 2026', 
      handle: '@apple2026', 
      category: 'Market Cap', 
      value: '$190K', 
      addr: '0x3f8c1d...6e2a9b', 
      icon: '🏢', 
      link: 'https://polymarket.com/event/largest-company-end-of-december-2026' 
    },
    { 
      id: '3', 
      title: 'AI Bubble Burst By...', 
      handle: '@aibubble', 
      category: 'AI Market', 
      value: '$1.2M', 
      addr: '0x9d2f7a...6c8e3b', 
      icon: '📊', 
      link: 'https://polymarket.com/event/ai-bubble-burst-by' 
    },
    { 
      id: '4', 
      title: 'Tesla launches Unsupervised FSD By...', 
      handle: '@teslafsd', 
      category: 'Autonomous', 
      value: '$2.0M', 
      addr: '0x4b8c3e...2f9d1a', 
      icon: '🚗', 
      link: 'https://polymarket.com/event/tesla-launches-unsupervised-full-self-driving-fsd-by' 
    },
    { 
      id: '5', 
      title: 'Which company has the best AI model end of March', 
      handle: '@aimarch', 
      category: 'AI Models', 
      value: '$85.7K', 
      addr: '0x6f1c9a...8d4e2b', 
      icon: '🤖', 
      link: 'https://polymarket.com/event/which-company-has-the-best-ai-model-end-of-march-751' 
    },
    { 
      id: '6', 
      title: 'Which company has the second best AI model end of March', 
      handle: '@secondbest', 
      category: 'AI Rankings', 
      value: '$774', 
      addr: '0x2e9d5c...7a3f8b', 
      icon: '🥈', 
      link: 'https://polymarket.com/event/which-company-has-the-second-best-ai-model-end-of-march' 
    },
    { 
      id: '7', 
      title: 'Best AI model for math on March 31', 
      handle: '@mathmodel', 
      category: 'AI Math', 
      value: '$1.1K', 
      addr: '0x8a4f2c...1e9d6b', 
      icon: '🧮', 
      link: 'https://polymarket.com/event/which-company-will-have-the-best-ai-model-for-math-on-march-31' 
    },
    { 
      id: '8', 
      title: 'Which company has second best AI model end of June', 
      handle: '@aijune', 
      category: 'Mid-Year AI', 
      value: '$54.1K', 
      addr: '0x5d8b3f...4c1a9e', 
      icon: '📅', 
      link: 'https://polymarket.com/event/which-company-has-second-best-ai-model-end-of-june' 
    },
    { 
      id: '9', 
      title: 'Largest Company end of January', 
      handle: '@topcompany', 
      category: 'Market Leaders', 
      value: '$5.2M', 
      addr: '0x1c6e9f...3b7d2a', 
      icon: '🏆', 
      link: 'https://polymarket.com/event/largest-company-end-of-january' 
    },
    { 
      id: '10', 
      title: 'AI Data Center Moratorium passed before 2027', 
      handle: '@datacenter', 
      category: 'AI Infrastructure', 
      value: '$347K', 
      addr: '0x7b2d5e...9c4f8a', 
      icon: '🏢', 
      link: 'https://polymarket.com/event/ai-data-center-moratorium-passed-before-2027' 
    },
    { 
      id: '11', 
      title: 'Magnificent 7 shrinks below 30% of S&P 500 in 2025', 
      handle: '@mag7', 
      category: 'Big Tech', 
      value: '$1.9M', 
      addr: '0x3f8c1d...6e2a9b', 
      icon: '📊', 
      link: 'https://polymarket.com/event/magnificent-7-shrinks-below-30-of-sp-500-in-2025' 
    },
    { 
      id: '12', 
      title: 'Largest Company end of November', 
      handle: '@novleader', 
      category: 'Year End', 
      value: '$2.8M', 
      addr: '0x9e5a2b...7c1f4d', 
      icon: '🌟', 
      link: 'https://polymarket.com/event/largest-company-end-of-november' 
    },
  ];

  return (
    <section id="markets" className="mb-24 scroll-mt-24">
      <h2 className="text-3xl font-bold text-white mb-10 tracking-tight">Market Forecasts</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <PredictionCard 
          type="YES" 
          score="499" 
          volume="$19.34M" 
          confidence={67} 
          gradient="from-red-600 to-red-400" 
        />
        <PredictionCard 
          type="NO" 
          score="252" 
          volume="$21.5M" 
          confidence={33} 
          gradient="from-blue-600 to-blue-400" 
        />
      </div>

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-baseline gap-2">
            <h2 className="text-2xl font-black text-white tracking-tighter uppercase">AIKO_MARKETS</h2>
            <span className="text-red-500 font-bold text-sm">(12)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {markets.map((m) => (
          <MarketCard key={m.id} {...m} />
        ))}
      </div>
    </section>
  );
};

const PredictionCard: React.FC<{ type: string; score: string; volume: string; confidence: number; gradient: string }> = ({ type, score, volume, confidence, gradient }) => (
  <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 hover:border-zinc-700 hover:shadow-[0_0_15px_rgba(239,68,68,0.1)] transition-all">
    <div className="flex items-center justify-between mb-8">
      <div>
        <div className={`text-sm font-bold uppercase tracking-widest mb-2 ${type === 'YES' ? 'text-red-500' : 'text-blue-500'}`}>{type}</div>
        <div className="text-5xl font-black text-white tracking-tighter">{score}</div>
      </div>
      <div className="text-right">
        <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-2">Volume</div>
        <div className="text-2xl font-black text-white tracking-tighter">{volume}</div>
      </div>
    </div>
    <div className="h-4 bg-zinc-900 rounded-full overflow-hidden mb-3">
      <div className={`h-full bg-gradient-to-r ${gradient} chart-bar-fill`} style={{ width: `${confidence}%` }}></div>
    </div>
    <div className="text-xs font-bold text-zinc-600 tracking-wider uppercase">{confidence}% confidence</div>
  </div>
);

const MarketCard: React.FC<{ title: string; handle: string; category: string; value: string; addr: string; icon: string; link: string }> = ({ title, handle, category, value, addr, icon, link }) => (
  <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 hover:border-red-500/50 hover:shadow-[0_0_25px_rgba(239,68,68,0.2)] hover:translate-y-[-4px] transition-all flex flex-col group min-h-[340px]">
    <div className="flex items-start justify-between mb-6">
      <div className="flex items-center gap-4 w-full">
        <div className="w-12 h-12 min-w-[3rem] rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl group-hover:bg-zinc-800 transition-colors">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-bold text-white tracking-tight truncate leading-tight mb-1" title={title}>{title}</div>
          <div className="text-[10px] text-red-500 font-bold uppercase tracking-widest">{handle}</div>
        </div>
      </div>
      <button className="text-zinc-500 hover:text-red-500 transition-colors p-1 shrink-0">
        <Bookmark size={20} />
      </button>
    </div>
    
    <div className="mb-6">
      <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">{category}</div>
      <div className="text-3xl font-black text-white tracking-tighter group-hover:text-red-500 transition-colors">{value}</div>
      <div className="text-[10px] text-zinc-700 font-mono mt-2 select-all overflow-hidden text-ellipsis whitespace-nowrap">
        {addr}
      </div>
    </div>

    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="mt-auto w-full py-3 bg-red-500 hover:bg-red-600 border border-red-500 rounded-xl text-center text-sm font-black text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-500/20 active:scale-[0.98]"
    >
      <Eye size={16} />
      View on Polymarket
    </a>
  </div>
);

export default Markets;
