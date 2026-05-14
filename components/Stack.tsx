import SectionLabel from './SectionLabel';

const GROUPS: { label: string; items: string[] }[] = [
  {
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'PHP', 'HTML', 'CSS', 'SQL'],
  },
  {
    label: 'Frameworks',
    items: ['Next.js', 'React', 'Vue.js', 'Laravel', 'Node.js', 'Express JS', 'Tailwind CSS', 'React Native'],
  },
  {
    label: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    label: 'Tools',
    items: ['Git', 'GitHub Actions', 'Docker', 'Vercel', 'Figma', 'Postman'],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="py-24 md:py-36 border-t">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionLabel index="02" title="Stack" />
        <h2 className="mt-6 tight text-4xl md:text-6xl tracking-tightest text-balance max-w-3xl">
          Tools I reach for <span className="text-muted">most days</span>.
        </h2>

        <div className="mt-14 grid grid-cols-12 gap-x-10 gap-y-10">
          {GROUPS.map((g) => (
            <div key={g.label} className="col-span-12 md:col-span-6">
              <div className="flex items-baseline justify-between border-b pb-3">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">{g.label}</h3>
                <span className="font-mono text-xs text-subtle">{String(g.items.length).padStart(2, '0')}</span>
              </div>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-base md:text-lg">
                {g.items.map((it) => (
                  <li key={it} className="text-fg">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
