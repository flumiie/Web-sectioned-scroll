interface SectionProps {
  children: React.ReactNode;
  reference?: React.LegacyRef<HTMLDivElement>;
  backgroundColor?: string;
  color?: string;
  style?: React.CSSProperties;
}

export default function Section(p: SectionProps) {
  return (
    <div ref={p.reference} style={{
      position: "relative",
      top: '100vh',
      backgroundColor: p.backgroundColor ?? 'white',
      color: p.color ?? 'black',
      ...p.style
    }}>
      {p.children}
    </div>
  )
}