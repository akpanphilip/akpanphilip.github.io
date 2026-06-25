type Props = {
  index: string;
  title: string;
};

export default function SectionLabel({ index, title }: Props) {
  return (
    <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.18em] text-muted">
      <span>{index}</span>
      <span className="h-px w-8 bg-line" />
      <span>{title}</span>
    </div>
  );
}
