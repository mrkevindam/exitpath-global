interface StickyLabelProps {
  label: string;
  index: number;
  dark?: boolean;
}

export default function StickyLabel({ label, index, dark = false }: StickyLabelProps) {
  return (
    <div
      className={`sticky z-30 flex items-center px-8 py-2 ${
        dark ? 'bg-maroon text-gold-light' : 'bg-cream text-gold'
      }`}
      style={{
        top: `${index * 32}px`,
        width: '100vw',
        marginLeft: 'calc(50% - 50vw)',
      }}
    >
      <span className="text-xs font-heading font-semibold uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}
