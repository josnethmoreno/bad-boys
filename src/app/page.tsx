import Image from 'next/image'
import styles from './page.module.css'

import Hero from './Hero'
import Header from '../components/Header/Header'

export default function Home() {
	return (
		<main>
			<Header />
			<Hero />
		</main>
	)
}
