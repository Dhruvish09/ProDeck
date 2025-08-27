import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dhruvish Patel - Resume',
  description: 'Full Stack Developer & AI Enthusiast',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">{children}</body>
    </html>
  )
}
