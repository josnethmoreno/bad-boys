'use client'

import './globals.css'
import './reset.css'
import { Manrope } from 'next/font/google'
const manrope = Manrope({ subsets: ['latin'] })

import { useThemeStore, PropsThemeStore } from '@/store/themeStore'

import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const theme = useThemeStore((state: PropsThemeStore) => state.theme)

	return (
		<html lang='en' className={theme} suppressHydrationWarning>
			<head />
			<body className={manrope.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
