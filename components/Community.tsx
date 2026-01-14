import React from 'react';

const Community: React.FC = () => {
  return (
    <section id="community" className="mb-24 scroll-mt-24">
      <h2 className="text-3xl font-bold text-white mb-10 tracking-tight">Community Hub</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CommunityCard 
          icon="𝕏"
          title="Official X"
          handle="@ai16zaiko"
          description="Follow AIKO's primary account for live updates, developer logs, and token news."
          link="https://x.com/ai16zaiko"
          color="bg-red-500"
          accent="red"
        />
        <CommunityCard 
          icon="👥"
          title="X Community"
          handle="Join the Collective"
          description="A dedicated space for $AIKO holders and fans to interact and share creative AI prompts."
          link="https://x.com/i/communities/2004459771244827038"
          color="bg-blue-600"
          accent="blue"
        />
      </div>
    </section>
  );
};

interface CommunityCardProps {
  icon: string;
  title: string;
  handle: string;
  description: string;
  link: string;
  color: string;
  accent: 'red' | 'blue';
}

const CommunityCard: React.FC<CommunityCardProps> = ({ icon, title, handle, description, link, color, accent }) => {
  const accentGlow = accent === 'red' ? 'rgba(239,68,68,0.2)' : 'rgba(37,99,235,0.2)';
  const btnStyles = accent === 'red' 
    ? 'bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white border-red-500/30' 
    : 'bg-blue-500/10 hover:bg-blue-500 text-blue-500 hover:text-white border-blue-500/30';

  return (
    <div className={`bg-zinc-950 border border-zinc-800 rounded-3xl p-10 hover:translate-y-[-4px] transition-all group shadow-xl hover:border-${accent}-500/50 hover:shadow-[0_0_25px_${accentGlow}]`}>
      <div className="flex items-center gap-5 mb-8">
        <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center text-3xl font-bold shadow-lg shadow-black/40`}>
          {icon}
        </div>
        <div>
          <div className="font-bold text-white text-xl tracking-tight">{title}</div>
          <div className="text-zinc-500 text-sm font-mono">{handle}</div>
        </div>
      </div>
      <p className="text-zinc-400 leading-relaxed mb-8 text-lg font-medium">{description}</p>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`block w-full py-4 border rounded-xl font-bold transition-all text-center tracking-wide active:scale-[0.98] ${btnStyles}`}
      >
        Access Platform
      </a>
    </div>
  );
};

export default Community;