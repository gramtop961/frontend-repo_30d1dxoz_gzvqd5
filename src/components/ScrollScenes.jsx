import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollScenes() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section id="about" ref={ref} className="relative w-full bg-slate-950 py-24 text-slate-100">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          style={{ y: y1 }}
          className="absolute left-10 top-10 h-48 w-48 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-fuchsia-500/30 blur-2xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <motion.h2
              style={{ rotate, scale }}
              className="font-display text-4xl font-semibold"
            >
              Tech-forward design meets playful interaction
            </motion.h2>
            <p className="mt-4 text-slate-300">
              This portfolio template brings depth through subtle parallax, glossy lighting, and motion that
              responds to your cursor and scroll. It feels tactile without getting in your way.
            </p>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li>• Cursor-reactive lighting and parallax</li>
              <li>• Smooth scroll-driven micro-animations</li>
              <li>• 3D tilt on hover with dynamic highlights</li>
            </ul>
          </div>
          <div className="relative">
            <motion.div
              className="relative h-72 w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-px backdrop-blur"
              style={{ rotate: rotate, scale: scale }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_var(--mx)_var(--my),rgba(255,255,255,0.08),transparent_40%)]" />
              <div className="h-full w-full rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800" />
            </motion.div>
            <p className="mt-4 text-sm text-slate-400">
              Tip: Move your cursor around — lighting will subtly follow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
