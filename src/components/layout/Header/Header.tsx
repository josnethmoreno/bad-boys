'use client'

import style from './Header.module.css'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Logotipo } from '../../icons/Icons/Icons'
import Anchor from '../../ui/Anchor/Anchor'
import Cart from '@/components/cart/Cart/Cart'

export default function Header() {
	const [showCart, setShowCart] = useState<Boolean>(false)
	const handleShowCart = () => {
		setShowCart(!showCart)
	}
	const pathname = usePathname()

	return (
		<header className={style.header}>
			<nav className={style.menu}>
				<div className={style['menu-brand']}>
					<Link href='/'>
						{ pathname === '/' ? 'We ride together. we die together.' : <Logotipo hero={false}/>}
					</Link>
				</div>
				<div className={style['menu-links']}>
					<ul>
						<li>
							<Anchor url='/' text='Shop' />
						</li>
						<li>
							<Anchor url='/info' text='Info' />
						</li>
						<li>
							<Anchor url='/faq' text='Faq' />
						</li>
						<li>
							<Anchor url='/gallery' text='Gallery' />
						</li>
					</ul>
					<span>
						Unofficial bad boys <br />
						movie merch store
					</span>
				</div>
				<div className={style['menu-actions']}>
					<button onClick={handleShowCart}>Cart usd 0 items</button>
					<div className={style['menu-theme']}>
						<button data-theme='black'></button>
						<button data-theme='white'></button>
						<button data-theme='artic'></button>
					</div>
				</div>
			</nav>
			<Cart show={showCart} setShow={setShowCart} />
		</header>
	)
}
