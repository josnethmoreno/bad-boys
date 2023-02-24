import Button from '@/components/Button/Button'
import Image from 'next/image'

import style from './page.module.css'

export default function Product() {
	return (
		<section className={style.product}>
			<div className={style['product-media']}>
				<figure>
					<Image src='/shop/1.png' fill={true} alt=''></Image>
				</figure>
				<figure>
					<Image src='/shop/2.png' fill={true} alt=''></Image>
				</figure>
				<figure>
					<Image src='/shop/1.png' fill={true} alt=''></Image>
				</figure>
				<figure>
					<Image src='/shop/2.png' fill={true} alt=''></Image>
				</figure>
			</div>
			<div className={style['product-info']}>
				<header className={style['product-header']}>
					<h3>BB 25TH ANNIVERSARY TEE</h3>
					<span>$35.00</span>
				</header>
				<div className={style['product-style']}>
					<span>Style: lime</span>
					<button data-style='lime'></button>
					<button data-style='oatmeal'></button>
				</div>
				<div className={style['product-size']}>
					<span>Size: </span>
					<div>
						<button className={style['size-button']}>sm</button>
						<button className={style['size-button']}>md</button>
						<button className={style['size-button']}>lg</button>
						<button className={style['size-button']}>xl</button>
						<button className={style['size-button']}>xxl</button>
					</div>
					<Button text='Add to cart' type='fill' />
				</div>
        <div className={style['product-caption']}></div>
			</div>
		</section>
	)
}
