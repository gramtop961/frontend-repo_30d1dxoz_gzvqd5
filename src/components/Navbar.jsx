import { Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-20 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-slate-100">
          <span className="inline-block h-2 w-2 rounded-full bg-cyan-400" />
          <span className="font-medium tracking-tight">3D Portfolio</span>
        </a>
        <nav className="flex items-center gap-3 text-slate-200">
          <a
            href="#projects"
            className="rounded-full px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-slate-100"
          >
            Projects
          </a>
          <a
            href="#about"
            className="rounded-full px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-slate-100"
          >
            About
          </a>
          <a
            href="#contact"
            className="rounded-full px-3 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-slate-100"
          >
            Contact
          </a>
          <div className="ml-2 flex items-center gap-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-100 transition hover:bg-white/20"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-100 transition hover:bg-white/20"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
