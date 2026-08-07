interface TranslationPendingProps {
  label?: string
  className?: string
}

export default function TranslationPending({
  label = 'Traducción pendiente',
  className = '',
}: TranslationPendingProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-body font-500 border ${className}`}
      style={{
        background: '#FEF9C3',
        borderColor: '#CA8A04',
        color: '#92400E',
      }}
    >
      <span>⚠</span>
      <span>[{label}]</span>
    </span>
  )
}
