import style from './page.module.css'

import { notFound } from 'next/navigation'
import Product from '@/components/product/Product/Product'

import { getProducts, ProductInterface } from '@/services/products.service'

interface PageProps {
	params: {
		slug: string
	}
}

export async function generateStaticParams() {
	const data = await getProducts()
	const products = await data.docs.reverse()
	return products.map((product: ProductInterface) => ({
		slug: product.slug,
	}))
}

export async function generateMetadata({ params }: PageProps) {
  const product = await getProductFromParams(params.slug);
  return { 
		title: product.name,
		description: product.description 
	}
}

async function getProductFromParams(slug: string) {
	const data = await getProducts()
	const products = await data.docs.reverse()

	const page = await products.find((p: ProductInterface) => p.slug === slug)

	if (!page) {
		return null
	}

	return page
}


export default async function page({ params }: PageProps) {
	const { slug } = params
	const product = await getProductFromParams(slug)

	if (!product) {
		return notFound()
	}

	return (
		<section>
			<Product product={product} />
		</section>
	)
}
