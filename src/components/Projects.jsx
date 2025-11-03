import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

function TiltCard({ title, subtitle }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateY = ((x - midX) / midX) * 10; // -10 to 10
    const rotateX = -((y - midY) / midY) * 10; // -10 to 10

    card.style.setProperty('--rx', `${rotateX}deg`);
    card.style.setProperty('--ry', `${rotateY}deg`);
    card.style.setProperty('--mx', `${x}px`);
    card.style.setProperty('--my', `${y}px`);
  };

  const reset = () => {
    const card = ref.current;
    if (!card) return;
    card.style.setProperty('--rx', `0deg`);
    card.style.setProperty('--ry', `0deg`);
  };

  return (
    <motion.a
      href="#"
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      className="group relative block h-56 w-full select-none rounded-2xl border border-white/10 bg-white/[0.04] p-px text-left backdrop-blur md:h-64"
      style={{
        transform: 'perspective(900px) rotateX(var(--rx)) rotateY(var(--ry))',
      }}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(400px_circle_at_var(--mx)_var(--my),rgba(255,255,255,0.12),transparent_40%)]" />
      <div className="relative flex h-full w-full flex-col justify-between rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-5 text-slate-100">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-slate-300">{subtitle}</p>
        </div>
        <div className="flex items-center justify-between text-sm text-slate-300">
          <span className="opacity-80">Explore</span>
          <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-display text-4xl font-semibold text-slate-100">Featured Projects</h2>
            <p className="mt-2 text-slate-400">A selection of interactive experiments and client work.</p>
          </div>
          <a
            href="#"
            className="hidden rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 hover:border-white/30 hover:bg-white/5 md:inline-block"
          >
            View All
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <TiltCard title="WebGL Playground" subtitle="Shaders, particles, and physics for the web." />
          <TiltCard title="Product Showcase" subtitle="3D-driven landing page experience." />
          <TiltCard title="Data Universe" subtitle="Interactive data viz that feels alive." />
          <TiltCard title="Micro-Interactions" subtitle="A suite of delightful motion patterns." />
        </div>
      </div>
    </section>
  );
}
