import style from './page.module.css'

import { notFound } from 'next/navigation'
import Product from '@/components/product/Product/Product'

import Metadata from 'next'

import { getProducts, ProductInterface } from '@/services/products.service'
import next from 'next'

interface PageProps {
	params: {
		slug: string
	}
}

async function getPageFromParams(slug: string) {
	const data = await getProducts()
	const products = await data.docs.reverse()

	const page = await products.find((p: ProductInterface) => p.slug === slug)

	if (!page) {
		return null
	}

	return page
}

export async function generateStaticParams() {
	const data = await getProducts()
	const products = await data.docs.reverse()
	return products.map((product: ProductInterface) => ({
		slug: product.slug,
	}))
}

export default async function page({ params }: PageProps) {
	const { slug } = params
	const product = await getPageFromParams(slug)

	if (!product) {
		return notFound()
	}

	return (
		<section>
			<Product product={product} />
		</section>
	)
}
