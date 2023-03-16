import style from './page.module.css'

import { notFound } from 'next/navigation'
import Image from 'next/image'
import Button from '@/components/ui/Button/Button'
import Sizes from '@/components/product/Product/ProductSizes/Sizes'
import Styles from '@/components/product/Product/ProductStyles/Styles'

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

	console.log(page.description)

	return (
		<section className={style.product}>
			<div className={style['product-media']}>
				{page.images.map((img: ImageElement, i: number) => (
					<figure key={img.id}>
						<Image
							src={img.image.url}
							fill={true}
							alt={img.image.alt}
							sizes='(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 50vw'
							priority={true}></Image>
					</figure>
				))}
			</div>
			<div className={style['product-info']}>
				<header className={style['product-header']}>
					<h3>{page.name}</h3>
					<span>{`$${page.price}.00`}</span>
				</header>
				{page.styles.length === 0 ? (
					<div className={style['product-space']}></div>
				) : (
					<Styles styles={page.styles} />
				)}
				<div className={style['product-container']}>
					{page.sizes.length === 0 ? <div className={style['product-space']}></div> : <Sizes sizes={page.sizes} />}
					<Button text='Add to cart' type='fill' />
				</div>
				<div className={style['product-caption']}>{page.description}</div>
			</div>
		</section>
	)
}
