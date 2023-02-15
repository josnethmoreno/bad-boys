import style from './Shop.module.css'

import Image from 'next/image'
import Link from 'next/link'

import Product from '@/components/Product/Product'
import Marquee from '@/components/Marquee/Marquee'
import Jumbo from '@/components/Jumbo/Jumbo'

export default function Shop() {
	return (
		<section className={style.shop}>
			<div className={` ${style['shop-grid']}`}>
				<Product url={'/product/1'} img={'/shop/1.png'} title={'BB Hoodie'} />
				<Product url={'/product/2'} img={'/shop/2.png'} title={'BB Hoodie'} />
			</div>
      <Marquee text={'• BAD BOYS FOR LIFE • WE RIDE TOGETHER • BAD BOYS 25TH ANNIVERSARY'} />
			<div className={` ${style['shop-grid-3']}`}>
				<Product url={'/product/1'} img={'/shop/1.png'} title={'BB Hoodie'} />
				<Product url={'/product/1'} img={'/shop/1.png'} title={'BB Hoodie'} />
				<Product url={'/product/2'} img={'/shop/2.png'} title={'BB Hoodie'} />
			</div>
			<Jumbo img={'/jumbo/jumbo-1.png'} />
      <Marquee text={`•I'VE NEVER TRUSTED ANYBODY BUT YOU. I'M ASKING YOU, MAN. BAD BOYS, ONE LAST TIME?`} />
			<div className={` ${style['shop-grid']}`}>
				<Product url={'/product/1'} img={'/shop/1.png'} title={'BB Hoodie'} />
				<Product url={'/product/2'} img={'/shop/2.png'} title={'BB Hoodie'} />
				<Product url={'/product/2'} img={'/shop/2.png'} title={'BB Hoodie'} />
				<Product url={'/product/2'} img={'/shop/2.png'} title={'BB Hoodie'} />
			</div>
			<Jumbo img={'/jumbo/jumbo-2.png'} />
		</section>
	)
}
