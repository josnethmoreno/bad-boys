'use client'

import style from './Header.module.css'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Logotipo } from '../../icons/Icons/Icons'
import Anchor from '../../ui/Anchor/Anchor'
import Nav from '../Menu/Menu'
import Cart from '@/components/cart/Cart/Cart'

export default function Header() {
	const [showCart, setShowCart] = useState<Boolean>(false)
	const handleShowCart = () => {
		setShowCart(!showCart)
	}
	return (
		<header className={style.header}>
			<Nav />
			<Cart show={showCart} setShow={setShowCart} />
		</header>
	)
}
