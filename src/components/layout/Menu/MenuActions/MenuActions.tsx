'use client'

import style from './MenuActions.module.css'
import { useThemeStore } from '@/store/themeStore'
import { useToggleCart } from '@/store/cartStore'

export default function MenuActions() {
	const { change } = useThemeStore()
	const { toggle, close } = useToggleCart()

	return (
		<div className={style['menu-actions']}>
			<button onClick={() => toggle()}>Cart usd 0 items</button>
			<div className={style['menu-theme']}>
				<button data-theme='black' onClick={() => change('black')}></button>
				<button data-theme='light' onClick={() => change('light')}></button>
				<button data-theme='artic' onClick={() => change('artic')}></button>
			</div>
		</div>
	)
}
