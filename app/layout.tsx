import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ConvexClientProvider } from '@/components/providers/convex-provider'
import { Toaster } from 'sonner'
import { ModalProvider } from '@/components/providers/modal-provider'
import { EdgeStoreProvider } from '@/lib/edgestore'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QueNota',
  description: 'To take notes!',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/m-black.svg",
        href: "/m-black.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/m-white.svg",
        href: "/m-white.svg",
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="quenota-theme"
            >
              <Toaster position='bottom-center' />
              <ModalProvider />
              {children}
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  )
}
