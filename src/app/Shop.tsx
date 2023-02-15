import style from './Shop.module.css'

import Image from 'next/image'
import Link from 'next/link'

import Product from '@/components/Product/Product'

export default function Shop() {
	return (
		<section className={style.shop}>
			<div className={` ${style['shop-grid']}`}>
				<Product url={'/product/1'} img={'/shop/1.png'} title={'BB Hoodie'} />
				<Product url={'/product/2'} img={'/shop/2.png'} title={'BB Hoodie'} />
			</div>
		</section>
	)
}
