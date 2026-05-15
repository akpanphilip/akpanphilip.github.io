'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import SectionLabel from './SectionLabel';
import { useRef, useState, type MouseEvent } from 'react';

type Project = {
  title: string;
  role: string;
  description: string;
  url: string;
  img: string;
  stack: string[];
};

const PROJECTS: Project[] = [
  {
    title: 'NaijaMart',
    role: 'Full-stack',
    description: 'Multi-vendor e-commerce platform with seller dashboards, payments and logistics integrations.',
    url: 'https://naijamart.com',
    img: '/images/naijamart.png',
    stack: ['Next.js', 'Laravel', 'MySQL', 'Tailwind'],
  },
  {
    title: 'Motor Africa',
    role: 'Frontend',
    description: 'Automotive marketplace for buying and selling vehicles across the continent.',
    url: 'https://motorafrica.co',
    img: '/images/motorafrica.png',
    stack: ['Laravel Blade', 'Tailwind'],
  },
  {
    title: 'MS Space Global',
    role: 'Full-stack',
    description: 'Corporate site with custom CMS for a real estate and infrastructure firm.',
    url: 'https://msspaceglobal.com',
    img: '/images/msspace.png',
    stack: ['Next.js', 'Laravel'],
  },
  {
    title: 'Brandroom',
    role: 'Frontend',
    description: 'Marketing site for a creative agency, designed for clarity and conversion.',
    url: 'https://brandroom.io',
    img: '/images/brandroom.png',
    stack: ['Next.js', 'Tailwind'],
  },
  {
    title: 'LearnX Africa',
    role: 'Full-stack',
    description: 'EdTech platform offering structured tech learning paths for African students.',
    url: 'https://learn-x-africa.vercel.app',
    img: '/images/learnx.png',
    stack: ['React', 'Node', 'PostgreSQL'],
  },
  {
    title: 'Prime Progress',
    role: 'Full-stack',
    description: 'Independent newsroom covering solutions journalism across Nigeria.',
    url: 'https://primeprogressng.com',
    img: '/images/prime.png',
    stack: ['Laravel', 'Bootstrap', 'MySQL'],
  },
  {
    title: 'Fleet Onboarding',
    role: 'Full-stack',
    description: 'SaaS onboarding flow for fleet operators — driver and vehicle registration.',
    url: 'https://fleet-onboarding.vercel.app',
    img: '/images/fleetOnboarding.png',
    stack: ['Next.js', 'TypeScript'],
  },
  {
    title: 'Shedrach',
    role: 'Full-stack',
    description: 'Personal brand site with editorial layout and content management.',
    url: 'https://shedrach.com',
    img: '/images/shedrach.png',
    stack: ['Laravel', 'Tailwind'],
  },
  {
    title: 'Small Chops',
    role: 'Frontend',
    description: 'Food ordering web app with cart, checkout and order tracking.',
    url: 'https://small-chops.vercel.app',
    img: '/images/smallchops.png',
    stack: ['React', 'Tailwind'],
  },
  {
    title: 'TalkIt',
    role: 'Frontend',
    description: 'Social conversation app with real-time threads.',
    url: 'https://talkit-kappa.vercel.app',
    img: '/images/talkit.png',
    stack: ['React', 'Socket.io'],
  },
  {
    title: 'SOBP',
    role: 'Full-stack',
    description: 'Society for Best Practices — non-profit healthcare information site.',
    url: 'https://sandbp.net',
    img: '/images/sobp.png',
    stack: ['Laravel', 'Bootstrap', 'MySQL'],
  },
  {
    title: 'Yummee',
    role: 'Frontend',
    description: 'Restaurant landing experience with menu browsing.',
    url: 'https://yummee22.netlify.app',
    img: '/images/yummie.png',
    stack: ['Next.js', 'Tailwind'],
  },
];

export default function Work() {
  const [hover, setHover] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = previewRef.current;
    const wrap = containerRef.current;
    if (!el || !wrap) return;
    const rect = wrap.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.transform = `translate(${x + 24}px, ${y - 80}px)`;
  };

  return (
    <section id="work" className="py-20 md:py-36 border-t">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <SectionLabel index="01" title="Selected work" />
        <h2 className="mt-5 md:mt-6 tight text-[2rem] md:text-6xl tracking-tightest text-balance max-w-3xl">
          A few things I&apos;ve <span className="text-muted">designed &amp; shipped</span> recently.
        </h2>
      </div>

      {/* Mobile — horizontal snap rail of card previews */}
      <div className="md:hidden mt-10">
        <div className="flex items-center justify-between px-5 pb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-subtle">
          <span>{String(PROJECTS.length).padStart(2, '0')} projects</span>
          <span>Swipe →</span>
        </div>
        <div className="snap-rail flex gap-3 overflow-x-auto px-5 pb-2">
          {PROJECTS.map((p) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="snap-item tap-press group flex w-[78vw] max-w-[320px] shrink-0 flex-col overflow-hidden rounded-2xl border bg-surface"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 78vw, 320px"
                  className="object-cover object-top"
                />
                <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-bg/85 backdrop-blur-sm">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <div className="flex flex-col gap-2 p-4">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-lg font-medium tracking-tight">{p.title}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-subtle">{p.role}</span>
                </div>
                <p className="line-clamp-2 text-[13px] leading-relaxed text-muted">{p.description}</p>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 3).map((t) => (
                    <span key={t} className="rounded-full border px-2 py-0.5 font-mono text-[10px] text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Desktop — list with floating preview */}
      <div className="hidden md:block mx-auto max-w-6xl px-6 md:px-10">
        <div
          ref={containerRef}
          onMouseMove={onMove}
          onMouseLeave={() => setHover(null)}
          className="relative mt-14 border-t"
        >
          {/* Floating preview */}
          <div
            ref={previewRef}
            className={`pointer-events-none absolute left-0 top-0 z-20 hidden lg:block transition-opacity duration-200 ${
              hover !== null ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative h-56 w-80 overflow-hidden rounded-xl ring-1 ring-line shadow-2xl bg-surface">
              {hover !== null && (
                <Image
                  key={PROJECTS[hover].img}
                  src={PROJECTS[hover].img}
                  alt=""
                  fill
                  sizes="320px"
                  className="object-cover object-top"
                />
              )}
            </div>
          </div>

          <ul>
            {PROJECTS.map((p, i) => (
              <li key={p.url} className="border-b">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHover(i)}
                  className="group grid grid-cols-12 items-center gap-4 py-6 md:py-7 transition-colors"
                >
                  <div className="col-span-12 md:col-span-5">
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-xl md:text-3xl font-medium tracking-tight transition-transform group-hover:translate-x-1">
                        {p.title}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 text-muted opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-fg" />
                    </div>
                    <p className="mt-1 text-sm text-muted">{p.role}</p>
                  </div>

                  <p className="col-span-12 md:col-span-5 text-sm md:text-[15px] text-muted leading-relaxed">
                    {p.description}
                  </p>

                  <div className="col-span-12 md:col-span-2 flex flex-wrap gap-1.5 md:justify-end">
                    {p.stack.slice(0, 3).map((t) => (
                      <span key={t} className="rounded-full border px-2 py-0.5 font-mono text-[10px] text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 md:px-10 mt-8 md:mt-10 text-sm text-muted">
        More on{' '}
        <a href="https://github.com/akpanphilip" target="_blank" rel="noopener noreferrer" className="link text-fg">
          GitHub
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}
