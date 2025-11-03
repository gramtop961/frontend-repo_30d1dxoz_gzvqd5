import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ScrollScenes from './components/ScrollScenes';
import Projects from './components/Projects';

function Contact() {
  return (
    <section id="contact" className="w-full bg-slate-950 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center text-slate-100">
        <h2 className="font-display text-4xl font-semibold">Let’s build something amazing</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-400">
          Have an idea or want your own interactive 3D portfolio? Reach out and let’s make it real.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:you@example.com"
            className="rounded-full bg-cyan-400/90 px-6 py-3 font-medium text-slate-900 shadow-lg shadow-cyan-400/25 transition hover:bg-cyan-300"
          >
            Email Me
          </a>
          <a
            href="#"
            className="rounded-full border border-white/20 px-6 py-3 font-medium text-slate-100 backdrop-blur transition hover:border-white/40 hover:bg-white/10"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      className="min-h-screen bg-slate-950 text-slate-100"
      style={{
        // Soft global glow following cursor
        backgroundImage: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(56,189,248,0.08), transparent 40%)`,
      }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <ScrollScenes />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950/80 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Your Name. Crafted with 3D and love.
      </footer>
    </div>
  );
}
