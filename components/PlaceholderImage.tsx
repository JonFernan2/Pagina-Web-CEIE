interface PlaceholderImageProps {
  label: string
  width?: number
  height?: number
  bgColor?: string
  className?: string
  alt?: string
}

export default function PlaceholderImage({
  label,
  width,
  height,
  bgColor = '#2D2D2D',
  className = '',
  alt,
}: PlaceholderImageProps) {
  const w = width ?? 800
  const h = height ?? 600

  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${w} ${h}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={alt ?? label}
      style={{ display: 'block' }}
    >
      <rect width={w} height={h} fill={bgColor} />
      <rect
        x="4"
        y="4"
        width={w - 8}
        height={h - 8}
        fill="none"
        stroke="#C5A028"
        strokeWidth="2"
        strokeDasharray="8 4"
      />
      {/* Camera icon */}
      <rect x={w / 2 - 28} y={h / 2 - 50} width="56" height="44" rx="4" fill="none" stroke="#C5A028" strokeWidth="2" />
      <circle cx={w / 2} cy={h / 2 - 28} r="12" fill="none" stroke="#C5A028" strokeWidth="2" />
      <rect x={w / 2 - 8} y={h / 2 - 56} width="16" height="8" rx="2" fill="#C5A028" />
      {/* Label */}
      <text
        x={w / 2}
        y={h / 2 + 12}
        textAnchor="middle"
        fill="#C5A028"
        fontSize={Math.min(14, w / 20)}
        fontFamily="'Outfit', system-ui, sans-serif"
        fontWeight="500"
      >
        {label}
      </text>
      <text
        x={w / 2}
        y={h / 2 + 34}
        textAnchor="middle"
        fill="#6B6B6B"
        fontSize={Math.min(11, w / 28)}
        fontFamily="'Outfit', system-ui, sans-serif"
      >
        Fotografía pendiente · CEIE UAI
      </text>
    </svg>
  )
}
