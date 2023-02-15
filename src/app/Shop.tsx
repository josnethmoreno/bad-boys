import style from './Shop.module.css'

import Image from 'next/image'
import Link from 'next/link'

import Product from '@/components/Product/Product'
import Marquee from '@/components/Marquee/Marquee'

export default function Shop() {
	return (
		<section className={style.shop}>
			<div className={` ${style['shop-grid']}`}>
				<Product url={'/product/1'} img={'/shop/1.png'} title={'BB Hoodie'} />
				<Product url={'/product/2'} img={'/shop/2.png'} title={'BB Hoodie'} />
			</div>
      <Marquee text={'• BAD BOYS FOR LIFE • WE RIDE TOGETHER • BAD BOYS 25TH ANNIVERSARY'} />
		</section>
	)
}
