export default function Services() {
  const services = [
    {
      title: 'Digital Strategy',
      description: 'Data-driven strategy systems shaped around your users, channels, and growth goals.',
      accent: 'from-sky-500 to-cyan-400',
      icon: (
        <svg className="w-32 h-32 neon-master" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" stroke="rgba(0,242,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M32 8V16M32 48V56M8 32H16M48 32H56" stroke="#00f2ff" strokeWidth="2" strokeLinecap="round" />
          <circle cx="32" cy="32" r="12" fill="rgba(0,242,255,0.15)" stroke="#00f2ff" strokeWidth="2.5" />
          <path d="M28 32L31 35L36 30" stroke="#00f2ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      title: 'Brand Identity',
      description: 'Bold brand systems that feel premium, modern, and unmistakably yours.',
      accent: 'from-sky-500 via-cyan-400 to-cyan-300',
      icon: (
        <svg className="w-32 h-32 neon-master" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 10L52 22V42L32 54L12 42V22L32 10Z" stroke="rgba(0,242,255,0.2)" strokeWidth="1" />
          <path d="M32 18L44 25V39L32 46L20 39V25L32 18Z" fill="rgba(0,242,255,0.2)" stroke="#00f2ff" strokeWidth="2.5" />
          <circle cx="32" cy="32" r="4" fill="#00f2ff" />
        </svg>
      ),
    },
    {
      title: 'Web Development',
      description: 'Fast, scalable web products built with performance and interaction in mind.',
      accent: 'from-sky-500 to-indigo-500',
      icon: (
        <svg className="w-32 h-32 neon-master" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="14" width="44" height="32" rx="4" stroke="#00f2ff" strokeWidth="2.5" fill="rgba(0,242,255,0.1)" />
          <path d="M10 22H54" stroke="#00f2ff" strokeWidth="1.5" />
          <circle cx="16" cy="18" r="1.5" fill="#00f2ff" />
          <circle cx="22" cy="18" r="1.5" fill="#00f2ff" />
          <path d="M26 30L22 34L26 38M38 30L42 34L38 38" stroke="#00f2ff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'UI/UX Design',
      description: 'Interfaces that feel effortless and flow smoothly across every device.',
      accent: 'from-cyan-400 to-sky-500',
      icon: (
        <svg className="w-32 h-32 neon-master" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="16" y="16" width="32" height="32" rx="8" stroke="rgba(0,242,255,0.2)" strokeWidth="1" />
          <circle cx="32" cy="32" r="14" fill="rgba(0,242,255,0.1)" stroke="#00f2ff" strokeWidth="2.5" />
          <circle cx="32" cy="32" r="6" fill="#00f2ff" />
          <path d="M32 8V14M32 50V56M8 32H14M50 32H56" stroke="#00f2ff" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'SEO & Marketing',
      description: 'Growth systems that increase discoverability and convert more visitors.',
      accent: 'from-sky-500 to-teal-400',
      icon: (
        <svg className="w-32 h-32 neon-master" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 48C20 35 35 45 52 16" stroke="#00f2ff" strokeWidth="3" strokeLinecap="round" />
          <path d="M42 16H52V26" stroke="#00f2ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="12" y="40" width="8" height="12" rx="1" fill="rgba(0,242,255,0.3)" />
          <rect x="24" y="32" width="8" height="20" rx="1" fill="rgba(0,242,255,0.2)" />
          <rect x="36" y="24" width="8" height="28" rx="1" fill="rgba(0,242,255,0.1)" />
        </svg>
      ),
    },
    {
      title: 'Content Creation',
      description: 'Visual storytelling and copy that brings your brand to life.',
      accent: 'from-cyan-300 to-sky-500',
      icon: (
        <svg className="w-32 h-32 neon-master" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 12H46C49.3 12 52 14.7 52 18V46C52 49.3 49.3 52 46 52H18C14.7 52 12 49.3 12 46V18C12 14.7 14.7 12 18 12Z" stroke="#00f2ff" strokeWidth="2" fill="rgba(0,242,255,0.1)" />
          <path d="M12 38L22 28L35 41L42 34L52 44" stroke="#00f2ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="40" cy="22" r="4" fill="#00f2ff" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="relative py-24 bg-slate-950 overflow-hidden">
      <div className="pointer-events-none absolute -top-10 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-24 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-300 mb-4">Services</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Dynamic solutions designed for the modern digital era</h2>
          <p className="text-lg text-slate-300">Every container here is built to feel alive — from brand systems to product launches, delivered with a neon-blue edge.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-800/80 bg-slate-900/90 shadow-[0_30px_80px_-40px_rgba(56,189,248,0.35)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-96 overflow-hidden bg-slate-950/70">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-15`} />
                <div className="absolute -left-10 -top-8 h-28 w-28 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute right-6 top-10 h-24 w-24 rounded-3xl bg-white/5 blur-2xl" />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="grid gap-3 w-full">
                    <div className="flex justify-between items-center rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-4 shadow-inner">
                      <div className="text-white text-sm font-semibold">{service.title}</div>
                      <div className="rounded-3xl bg-sky-500/20 px-3 py-2 text-sky-200 text-xs">Live</div>
                    </div>
                    <div className="relative h-52 rounded-[2rem] border border-white/10 bg-slate-950/90 overflow-hidden">
                      <div className="absolute inset-0 rounded-[2rem] border border-cyan-400/20 shadow-[0_0_40px_0_rgba(56,189,248,0.12)]" />
                      <div className="absolute inset-0 rounded-[2rem] border border-cyan-500/25 opacity-70 animate-glow-ring" />
                      <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-sky-500/20 blur-2xl" />
                      <div className="absolute left-0 bottom-0 h-16 w-16 rounded-full bg-cyan-400/20 blur-2xl" />
                      <div className="relative flex h-full items-center justify-center text-slate-100 neon-container-glow">
                        <div className="w-40 h-40">{service.icon}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-8 py-4 rounded-full bg-sky-500 text-slate-950 font-semibold shadow-xl shadow-sky-500/30 hover:bg-sky-400 transition-all hover:scale-105"
          >
            Start the next wave
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
