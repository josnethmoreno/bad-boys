import Hero from '@/components/layout/Hero/Hero'
import Shop from './Shop'

export default function Home() {
	return (
		<main>
			<Hero />
			{/* @ts-expect-error Server Component */}
			<Shop />
		</main>
	)
}
