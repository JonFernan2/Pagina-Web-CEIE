import { Fragment } from 'react'

const EMAIL = /([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g

// Turns email addresses inside plain text into mailto links, keeping the surrounding text color.
export default function Linkify({ text }: { text: string }) {
  const parts = text.split(EMAIL)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <a
            key={i}
            href={`mailto:${part.replace(/\.$/, '')}`}
            className="underline underline-offset-2 hover:no-underline"
            style={{ color: 'inherit', textDecorationColor: '#6493b5' }}
          >
            {part}
          </a>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  )
}
