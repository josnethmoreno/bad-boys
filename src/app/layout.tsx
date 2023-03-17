import './globals.css'
import './reset.css'

import { Manrope } from 'next/font/google'
const manrope = Manrope({ subsets: ['latin'] })

import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark' suppressHydrationWarning>
      <head />
      <body className={manrope.className}>
        <Header/>
          {children}
        <Footer />
      </body>
    </html>
  )
}
