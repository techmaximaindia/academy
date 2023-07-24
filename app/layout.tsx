import { Inter } from 'next/font/google'

import './globals.css'
import { CommandDialog } from '@/components/command-dialog'
import { Header } from '@/components/header'

export const metadata = {
  title: '101.school',
  description: 'Learn anything with 101 school',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white text-slate-900 antialiased dark:bg-slate-900 dark:text-white/90 min-h-screen relative flex flex-col overflow-hidden`}
      >
        <Header className="shrink-0" />

        <div className="flex-1">{children}</div>

        <CommandDialog />
      </body>
    </html>
  )
}
