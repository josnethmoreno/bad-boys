import './globals.css'
import './reset.css'

import { Manrope } from '@next/font/google'
const manrope = Manrope({ subsets: ['latin'] })

import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
