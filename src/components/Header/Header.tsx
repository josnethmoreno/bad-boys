import Link from 'next/link'
import Anchor from '../Anchor/Anchor'
import styles from './Header.module.css'

export default function Header() {
	return (
		<header className={styles.header}>
			<nav className={styles.menu}>
				<div className={styles['menu-brand']}>
					<Link href='/'>
						We ride together. <br />
						We die together.
					</Link>
				</div>
				<div className={styles['menu-links']}>
					<ul>
						<li>
							<Anchor url="/" text="Shop" />
						</li>
						<li>
							<Anchor url="/info" text="Info" />
						</li>
						<li>
							<Anchor url="/faq" text="Faq" />
						</li>
						<li>
							<Anchor url="/gallery" text="Gallery" />
						</li>
					</ul>
					<span>
						Official bad boys <br />
						movie merch store
					</span>
				</div>
				<div className={styles['menu-cart']}>
					<p>Cart usd 0 items</p>
					<div className={styles['menu-theme']}>
						<button></button>
						<button></button>
						<button></button>
					</div>
				</div>
			</nav>
		</header>
	)
}
