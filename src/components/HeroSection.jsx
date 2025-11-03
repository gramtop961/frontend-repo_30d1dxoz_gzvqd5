import { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function HeroSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const maxShift = 20; // px parallax for text group
  const { innerWidth: w, innerHeight: h } = typeof window !== 'undefined' ? window : { innerWidth: 1, innerHeight: 1 };
  const tx = ((mouse.x / (w || 1)) - 0.5) * maxShift;
  const ty = ((mouse.y / (h || 1)) - 0.5) * maxShift;

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0" aria-hidden>
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Light glow gradients - do not block interaction */}
      <div className="pointer-events-none absolute inset-0" ref={overlayRef} aria-hidden>
        <div
          className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle at center, rgba(56,189,248,0.35), transparent 60%)',
            transform: `translate(${tx * 0.6}px, ${ty * 0.6}px)`,
          }}
        />
        <div
          className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle at center, rgba(168,85,247,0.35), transparent 60%)',
            transform: `translate(${tx * -0.4}px, ${ty * -0.4}px)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div
          className="max-w-2xl text-slate-100 drop-shadow-[0_1px_0_rgba(0,0,0,0.3)]"
          style={{ transform: `translate3d(${tx}px, ${ty}px, 0)` }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200 backdrop-blur">
            <Rocket className="h-4 w-4 text-cyan-300" />
            Interactive 3D • Tech • Playful
          </div>
          <h1 className="font-display text-5xl font-semibold leading-tight sm:text-6xl">
            Elevate your portfolio with immersive 3D interaction
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Cursor-reactive visuals, smooth motion, and a modern aesthetic. Scroll to explore projects
            and micro-interactions that feel alive.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-cyan-400/90 px-5 py-3 font-medium text-slate-900 shadow-lg shadow-cyan-400/25 transition hover:bg-cyan-300"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-medium text-slate-100 backdrop-blur transition hover:border-white/40 hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
