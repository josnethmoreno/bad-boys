import style from './ProductImages.module.css'
import Image from "next/image"

import { ImageElement } from '@/services/products.service'

interface Props {
	images: ImageElement[]
}

export default function ProductImage({ images }: Props) {
	return (
		<div className={style['product-images']}>
			{images.map((img: ImageElement, i: number) => (
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
	)
}
