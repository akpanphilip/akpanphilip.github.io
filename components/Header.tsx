'use client';

import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const SECTIONS = [
  { id: 'work', label: 'Work' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
];

function useLocalTime() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => {
      setTime(
        new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Africa/Lagos',
          hour12: false,
        }).format(new Date()),
      );
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function useActiveSection() {
  const [active, setActive] = useState<string>('');
  useEffect(() => {
    const ids = SECTIONS.map((s) => s.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const time = useLocalTime();
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'bg-bg/80 backdrop-blur-md border-line' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-2 text-sm font-medium">
          <span className="font-mono text-muted">·</span>
          <span>Philip Akpan</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`relative rounded-full px-3 py-1.5 transition-colors ${
                active === s.id ? 'text-fg' : 'text-muted hover:text-fg'
              }`}
            >
              {active === s.id && (
                <span className="absolute inset-0 -z-10 rounded-full bg-surface ring-1 ring-line" />
              )}
              {s.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-muted">
            <span className="status-dot" />
            <span>{time || '—'} Abuja</span>
          </div>
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border"
          >
            <div className="space-y-1">
              <span className={`block h-px w-4 bg-fg transition-transform ${open ? 'translate-y-[5px] rotate-45' : ''}`} />
              <span className={`block h-px w-4 bg-fg transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-px w-4 bg-fg transition-transform ${open ? '-translate-y-[5px] -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-bg">
          <ul className="mx-auto max-w-6xl px-6 py-4 flex flex-col">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-3 text-base"
                >
                  <span>{s.label}</span>
                  <span className="font-mono text-xs text-muted">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
