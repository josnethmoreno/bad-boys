import style from './Header.module.css'

import Menu from '../Menu/Menu'
import Cart from '@/components/cart/Cart/Cart'

export default function Header() {
	return (
		<header className={style.header}>
			<Menu />
			<Cart />
		</header>
	)
}
