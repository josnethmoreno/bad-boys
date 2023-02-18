import Link from 'next/link'
import Anchor from '../Anchor/Anchor'
import style from './Header.module.css'

export default function Header() {
	return (
		<header className={style.header} id="top">
			<nav className={style.menu}>
				<div className={style['menu-brand']}>
					<Link href='/'>
						We ride together. <br />
						We die together.
					</Link>
				</div>
				<div className={style['menu-links']}>
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
				<div className={style['menu-actions']}>
					<button>Cart usd 0 items</button>
					<div className={style['menu-theme']}>
						<button data-theme="black"></button>
						<button data-theme="white"></button>
						<button data-theme="artic"></button>
					</div>
				</div>
			</nav>
		</header>
	)
}
