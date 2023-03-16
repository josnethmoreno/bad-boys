import style from './Product.module.css'

import Link from 'next/link'
import Image from 'next/image'

interface Props {
	url: string
	img: string
	title: string
  priority: boolean
}

export default function Product({ url, img, title, priority }: Props) {
	return (
		<div className={style.product}>
			<Link href={url}>
				<figure className={style['product-img']}>
					<Image
						src={img}
						alt=''
						fill={true}
						sizes='(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 50vw'
            priority={priority}
					/>
				</figure>
				<p className={style['product-title']}>{title}</p>
			</Link>
		</div>
	)
}
