import style from './page.module.css'

import { notFound } from 'next/navigation'
import Image from 'next/image'
import Button from '@/components/Button/Button'
import Sizes from '@/components/Sizes/Sizes'
import Styles from '@/components/Styles/Styles'

import {
	getProducts,
	getProduct,
	ProductInterface,
	ImageElement,
} from '@/services/products.service'

interface PageProps {
	params: {
		slug: string
	}
}

export async function generateStaticParams() {
	const data = await getProducts()
	const products = await data.docs.reverse()
	return products.map((product: ProductInterface) => ({
		id: product.id,
		slug: product.slug,
	}))
}

async function getPageFromSlug(slug: string) {
	const data = await getProducts()
	const products = await data.docs.reverse()

	const page = await products.find((p: ProductInterface) => p.slug === slug)

	if (!page) {
		return null
	}

	return page
}

export default async function Product({ params }: PageProps) {
	const { slug } = params
	const page = await getPageFromSlug(slug)

	if (!page) {
		return notFound()
	}

	return (
		<section className={style.product}>
			<div className={style['product-media']}>
				{page.images.map((img: ImageElement, i: number) => (
					<figure key={img.id}>
						<Image src={img.image.url} fill={true} alt={img.image.alt}></Image>
					</figure>
				))}
			</div>
			<div className={style['product-info']}>
				<header className={style['product-header']}>
					<h3>{page.name}</h3>
					<span>{`$${page.price}.00`}</span>
				</header>
				{page.styles.length === 0 ? <div></div> : <Styles styles={page.styles} />}
				<div className={style['product-container']}>
					{page.sizes.length === 0 ? <div></div> : <Sizes sizes={page.sizes} />}
					<Button text='Add to cart' type='fill' />
				</div>
				<div className={style['product-caption']}>
					We ride together. We die together. We got the whole damn story printed
					on the back of this tee. Featuring the official 25th Anniversary logo
					on the front. White ink printed on black cotton. Available for 10 days
					only. <br></br>
					<br></br> 🙏 This is a limited edition production run. Printing starts
					when the drop ends. Reminder: Bad Boys for Life. Shipping may take 10+
					days due to COVID-19.
				</div>
			</div>
		</section>
	)
}
