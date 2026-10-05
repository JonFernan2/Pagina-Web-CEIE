import { SpeedInsights } from '@vercel/speed-insights/next'
import '@/app/globals.css'

export default function SiteDocument({ lang, children }: { lang: string; children: React.ReactNode }) {
  return (
    <html lang={lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body">
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
