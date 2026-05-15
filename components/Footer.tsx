export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t pb-20 md:pb-0 safe-pb">
      <div className="mx-auto max-w-6xl px-5 md:px-10 py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 text-sm text-muted">
        <div className="flex items-center gap-2 font-mono text-[11px] md:text-xs">
          <span className="status-dot" />
          <span>© {year} Philip Akpan</span>
        </div>
        <div className="font-mono text-[11px] md:text-xs text-balance">
          Built with Next.js · Tailwind · Designed &amp; shipped from Abuja
        </div>
        <a href="#top" className="tap-press font-mono text-[11px] md:text-xs hover:text-fg transition-colors">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
