import React from 'react';

const Features: React.FC = () => {
  const features = [
    { icon: '💬', title: 'Natural Conversations', desc: 'Context-aware AI dialog' },
    { icon: '🤖', title: 'AI-Powered', desc: 'Advanced ElizaCloud logic' },
    { icon: '⚡', title: 'Always Available', desc: '24/7 instant character access' },
    { icon: '🎯', title: 'Contextual', desc: 'Remembers historical chats' },
    { icon: '🌟', title: 'Engaging', desc: 'Dynamic persona behavior' },
    { icon: '🔒', title: 'Private', desc: 'Secure end-to-end sessions' },
    { icon: '🎨', title: 'Creative', desc: 'Generative idea assistance' },
    { icon: '🚀', title: 'Fast', desc: 'Low-latency server response' },
  ];

  return (
    <section id="features" className="mb-24 scroll-mt-24">
      <h2 className="text-3xl font-bold text-white mb-10 tracking-tight">Capabilities</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div key={i} className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] hover:translate-y-[-4px] transition-all group cursor-default">
            <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{f.icon}</div>
            <div className="font-bold text-white mb-2 text-lg leading-tight tracking-tight">{f.title}</div>
            <div className="text-xs text-zinc-500 leading-relaxed font-medium">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;