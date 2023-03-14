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
					<span>Style: Lime</span>
						<button key='1' data-style='lime' data-active='false'></button>
				</div>
				<div className={style['product-size']}>
					<span>Size: SM </span>
					<div>
							<button key='2' className={style['size-button']} data-active=''>SM</button>
					</div>
					<Button text='Add to cart' type='fill' />
				</div>
				<div className={style['product-caption']}>
					We ride together. We die together. We got the whole damn story printed
					on the back of this tee. Featuring the official 25th Anniversary logo
					on the front. White ink printed on black cotton. Available for 10 days
					only. <br></br><br></br> 🙏 This is a limited edition production run. Printing starts
					when the drop ends. Reminder: Bad Boys for Life. Shipping may take 10+
					days due to COVID-19.
				</div>
			</div>
		</section>
	)
}
