import style from './ProductInfo.module.css'

import Image from 'next/image'
import Button from '@/components/ui/Button/Button'
import ProductSizes from '@/components/product/Product/ProductSizes/ProductSizes'
import ProductStyles from '@/components/product/Product/ProductStyles/ProductStyles'

import { Size, Style, ProductInterface } from '@/services/products.service'

interface Props {
	id: string
	name: string
	description: string
	price: number,
	styles: Style[],
	sizes: Size[]
}

export default function ProductInfo({
	name,
	price,
	styles,
	sizes,
	description,
}: Props) {
	return (
		<div className={style['product-info']}>
			<div className={style['product-info']}>
				<header className={style['product-header']}>
					<h3>{name}</h3>
					<span>{`$${price}.00`}</span>
				</header>
				{styles.length === 0 ? (
					<div className={style['product-space']}></div>
				) : (
					<ProductStyles styles={styles} />
				)}
				<div className={style['product-container']}>
					{sizes.length === 0 ? (
						<div className={style['product-space']}></div>
					) : (
						<ProductSizes sizes={sizes} />
					)}
					<Button text='Add to cart' type='fill' />
				</div>
				<div className={style['product-caption']}>{description}</div>
			</div>
		</div>
	)
}
