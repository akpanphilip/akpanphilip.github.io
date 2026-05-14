import Image from 'next/image';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

const FACTS = [
  { k: 'Role', v: 'Full-stack developer' },
  { k: 'Experience', v: '5+ years' },
  { k: 'Focus', v: 'Web · Mobile' },
  { k: 'Based in', v: 'Abuja, Nigeria' },
];

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-20 md:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-[0.3] dark:opacity-20" />

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left — copy */}
          <div className="col-span-12 md:col-span-7 order-2 md:order-1">
            <div className="flex items-center gap-2 text-xs font-mono text-muted">
              <span className="status-dot" />
              <span>Available for select engagements · 2026</span>
            </div>

            <h1 className="mt-6 tight text-balance text-[clamp(1.85rem,4.4vw,2.50rem)] font-medium tracking-tightest">
              Full Stack Developer crafting 
              <span className="text-muted"> High Performance </span>
              Web and Mobile Products from Abuja, Nigeria.
            </h1>

            <div className="mt-8 space-y-5 text-base md:text-[17px] leading-relaxed text-muted max-w-xl">
              <p>
                <span className="text-fg">Full Stack Developer</span>  with 5+ years shipping product across e-commerce, edtech, SaaS, and editorial. 
              </p>
              {/* I work alone, on small teams, and embedded with founders building their first version. */}
              <p>
                My toolkit centres on <span className="text-fg">TypeScript</span>, <span className="text-fg">Next.js</span>, <span className="text-fg">NodeJs</span> and <span className="text-fg">Laravel</span>, with React and Vue on the frontend, MySQL and PostgreSQL on the backend, and React Native when work goes mobile. I care about details, typography, motion, and the small frictions that make software feel slow.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg hover:opacity-90 transition-opacity"
              >
                See selected work
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="mailto:akpanphilip1122@gmail.com"
                className="group inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium hover:bg-surface transition-colors"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="/Akpan_Philip_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-1 py-2.5 text-sm text-muted hover:text-fg transition-colors"
              >
                <span className="link">Résumé</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* Right — portrait */}
          <div className="col-span-12 md:col-span-5 order-1 md:order-2">
            <div className="relative mx-auto md:mx-0 max-w-sm md:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-line bg-surface">
                <Image
                  src="/images/dp.jpg"
                  alt="Philip Akpan"
                  fill
                  sizes="(min-width: 768px) 40vw, (min-width: 1024px) 32vw, 90vw"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="mt-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                <span>Philip Akpan</span>
                <span>WAT · UTC+1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Meta strip */}
        <dl className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t pt-8">
          {FACTS.map((f) => (
            <div key={f.k} className="flex flex-col gap-1">
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">{f.k}</dt>
              <dd className="text-sm md:text-base text-fg">{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
