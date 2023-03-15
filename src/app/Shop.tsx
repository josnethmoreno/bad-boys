import style from './Shop.module.css'

import Product from '@/components/Product/Product'
import Marquee from '@/components/Marquee/Marquee'
import Jumbo from '@/components/Jumbo/Jumbo'

import { getProducts } from '@/services/products.service'
import { ProductInterface } from '@/services/products.service'

export default async function Shop() {
	const data = await getProducts()
	const products = await data.docs.reverse()

	return (
		<section className={style.shop}>
			<div className={` ${style['shop-grid']}`}>
				{products.slice(0, 2).map((p: ProductInterface) => (
					<Product
						key={p.id}
						url={p.slug}
						img={p.images[0].image.url}
						title={p.name}
					/>
				))}
			</div>
			<Marquee
				text={
					'• BAD BOYS FOR LIFE • WE RIDE TOGETHER • BAD BOYS 25TH ANNIVERSARY'
				}
			/>
			<div className={` ${style['shop-grid-3']}`}>
				{products.slice(2, 5).map((p: ProductInterface) => (
					<Product
						key={p.id}
						url={p.name.toLowerCase().replaceAll(' ', '-')}
						img={p.images[0].image.url}
						title={p.name}
					/>
				))}
			</div>
			<Jumbo img={'/jumbo/jumbo-1.png'} />
			<Marquee
				text={`•I'VE NEVER TRUSTED ANYBODY BUT YOU. I'M ASKING YOU, MAN. BAD BOYS, ONE LAST TIME?`}
			/>
			<div className={` ${style['shop-grid']}`}>
			{products.slice(5, 9).map((p: ProductInterface) => (
					<Product
						key={p.id}
						url={p.name.toLowerCase().replaceAll(' ', '-')}
						img={p.images[0].image.url}
						title={p.name}
					/>
				))}
			</div>
			<Jumbo img={'/jumbo/jumbo-2.png'} />
		</section>
	)
}
