import Hero from '@/components/layout/Hero/Hero'
import Shop from './Shop'

export const metadata = {
	title: 'Fake Bad-boys E-Commerce',
	icons: {
		icon: '/favicon.ico',
	}
}

export default function Home() {
	return (
		<main>
			<Hero />
			{/* @ts-expect-error Server Component */}
			<Shop />
		</main>
	)
}
