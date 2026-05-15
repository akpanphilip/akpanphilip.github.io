'use client';

import { useEffect, useState } from 'react';
import { Home, Briefcase, Layers, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const SECTIONS = [
  { id: 'work', label: 'Work' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
];

const BOTTOM_NAV = [
  { id: 'top', label: 'Home', icon: Home },
  { id: 'work', label: 'Work', icon: Briefcase },
  { id: 'stack', label: 'Stack', icon: Layers },
  { id: 'contact', label: 'Contact', icon: Mail },
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
    const ids = [...SECTIONS.map((s) => s.id), 'top'];
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

  // Lock background scroll when the mobile sheet is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b safe-pt transition-colors duration-300 ${
          scrolled || open ? 'bg-bg/85 backdrop-blur-md border-line' : 'border-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-10 md:py-4">
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

          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-muted">
              <span className="status-dot" />
              <span>{time || '—'} Abuja</span>
            </div>
            <ThemeToggle />
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="md:hidden tap-press inline-flex h-10 w-10 items-center justify-center rounded-full border bg-bg active:bg-surface"
            >
              <div className="space-y-[5px]">
                <span className={`block h-px w-4 bg-fg transition-transform duration-300 ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
                <span className={`block h-px w-4 bg-fg transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
                <span className={`block h-px w-4 bg-fg transition-transform duration-300 ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile sliding sheet */}
        {open && (
          <div className="md:hidden sheet-in border-t bg-bg/95 backdrop-blur-md">
            <div className="mx-auto max-w-6xl px-5 pb-6 pt-2">
              <div className="flex items-center gap-2 pb-3 font-mono text-[11px] text-muted">
                <span className="status-dot" />
                <span>{time || '—'} · Abuja</span>
              </div>
              <ul className="flex flex-col">
                {SECTIONS.map((s, i) => (
                  <li key={s.id} className={i > 0 ? 'border-t' : ''}>
                    <a
                      href={`#${s.id}`}
                      onClick={() => setOpen(false)}
                      className="tap-press flex items-center justify-between py-4 text-lg"
                    >
                      <span>{s.label}</span>
                      <span className="font-mono text-xs text-muted">→</span>
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:akpanphilip1122@gmail.com"
                onClick={() => setOpen(false)}
                className="tap-press mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-medium text-bg"
              >
                Get in touch
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop behind the sheet */}
      {open && (
        <button
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="md:hidden overlay-in fixed inset-0 top-[var(--header-h,64px)] z-40 bg-fg/20 backdrop-blur-[2px]"
        />
      )}

      {/* Sticky bottom nav — mobile only */}
      <nav
        aria-label="Primary"
        className={`md:hidden fixed inset-x-0 bottom-0 z-40 safe-pb border-t bg-bg/90 backdrop-blur-md transition-opacity duration-200 ${
          open ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
      >
        <ul className="mx-auto flex max-w-md items-stretch justify-around px-2 py-1.5">
          {BOTTOM_NAV.map((n) => {
            const isActive = active === n.id || (!active && n.id === 'top');
            const Icon = n.icon;
            return (
              <li key={n.id} className="flex-1">
                <a
                  href={`#${n.id}`}
                  className={`tap-press flex flex-col items-center justify-center gap-0.5 rounded-xl px-2 py-1.5 transition-colors ${
                    isActive ? 'text-fg' : 'text-muted'
                  }`}
                >
                  <Icon className="h-5 w-5" strokeWidth={isActive ? 2.25 : 1.75} />
                  <span className={`text-[10px] tracking-wide ${isActive ? 'font-medium' : ''}`}>{n.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
