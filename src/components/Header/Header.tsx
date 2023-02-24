'use client'

import { useState } from 'react'
import style from './Header.module.css'

import Link from 'next/link'
import Anchor from '../Anchor/Anchor'
import Cart from '../Cart/Cart'

export default function Header() {
  const [showCart, setShowCart] = useState(false)

	const handleShowCart = () => {
		setShowCart(!showCart)
	}

	return (
		<header className={style.header}>
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
					<button onClick={handleShowCart}>Cart usd 0 items</button>
					<div className={style['menu-theme']}>
						<button data-theme="black"></button>
						<button data-theme="white"></button>
						<button data-theme="artic"></button>
					</div>
				</div>
			</nav>
			<Cart show={showCart} setShow={handleShowCart}/>
		</header>
	)
}
