import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google' // Import Montserrat font
import './globals.css'
import { cn } from '../lib/utils'
import Providers from './Redux/Provider'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Evolution: Event Management Website & Mobile App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          montserrat.className,
        )}
      >
        <Providers>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  )
}
