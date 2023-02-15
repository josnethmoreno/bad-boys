import style from './Shop.module.css'

import Image from 'next/image'
import Link from 'next/link'

export default function Shop() {
	return (
		<section className={style.shop}>
			<div className={` ${style['shop-grid']}`}>
				<div className={style['product']}>
					<Link href='/product/1'>
						<figure>
							<Image src='/shop/1.png' alt='' fill={true} />
						</figure>
						<p className={style['product-title']}>BB 25th Anniversary Tee - $ 35.00</p>
					</Link>
				</div>
				<div className={style['product']}>
					<Link href='/product/2'>
						<figure>
							<Image src='/shop/2.png' alt='' fill={true} />
						</figure>
						<p className={style['product-title']}>BB 25th Anniversary Tee - $ 35.00</p>
					</Link>
				</div>
			</div>
		</section>
	)
}
