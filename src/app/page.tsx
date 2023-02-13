import Image from 'next/image'
import styles from './page.module.css'

import Hero from '../components/Hero/Hero'
import Header from '../components/Header/Header'
import Shop from './Shop'

export default function Home() {
	return (
		<main>
			<Header />
			<Hero />
			<Shop />
		</main>
	)
}
