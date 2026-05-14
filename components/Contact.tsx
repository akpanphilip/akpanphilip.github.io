import { ArrowUpRight } from 'lucide-react';
import SectionLabel from './SectionLabel';

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/akpanphilip', handle: '@akpanphilip' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/akpan-philip/', handle: 'in/akpan-philip' },
  { label: 'Facebook', href: 'https://www.facebook.com/philddev/', handle: 'philddev' },
  { label: 'Phone', href: 'tel:+2348133441949', handle: '+234 813 344 1949' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36 border-t">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionLabel index="03" title="Contact" />

        <div className="mt-10 grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-7">
            <h2 className="tight text-balance text-5xl md:text-7xl tracking-tightest">
              Have a project in mind?
              <br />
              <span className="text-muted">Let&apos;s talk.</span>
            </h2>

            <a
              href="mailto:akpanphilip1122@gmail.com"
              className="group mt-10 inline-flex items-center gap-3 text-2xl md:text-4xl font-medium tracking-tight"
            >
              <span className="link">akpanphilip1122@gmail.com</span>
              <ArrowUpRight className="h-6 w-6 md:h-8 md:w-8 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>

            <p className="mt-6 max-w-md text-muted">
              Open to freelance, contract or full-time engineering roles. I usually reply within a day.
            </p>
          </div>

          <div className="col-span-12 md:col-span-5 md:pl-10">
            <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted border-b pb-3">Elsewhere</div>
            <ul>
              {SOCIALS.map((s) => (
                <li key={s.label} className="border-b">
                  <a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-4"
                  >
                    <span className="text-base md:text-lg">{s.label}</span>
                    <span className="flex items-center gap-2 text-sm text-muted transition-colors group-hover:text-fg">
                      {s.handle}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
