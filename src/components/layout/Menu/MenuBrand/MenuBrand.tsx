'use client'

import style from './MenuBrand.module.css'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Logotipo } from '@/components/icons/Icons/Icons'

export default function MenuBrand() {
  const pathname = usePathname()
	return (
		<div className={style['menu-brand']}>
			<Link href='/'>
				{pathname === '/' ? (
					'We ride together. we die together.'
				) : (
					<Logotipo hero={false} />
				)}
			</Link>
		</div>
	)
}
