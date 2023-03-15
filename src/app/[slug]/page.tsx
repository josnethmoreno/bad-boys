import style from './page.module.css'

import Button from '@/components/Button/Button'
import Image from 'next/image'

import { getProducts } from '@/services/products.service'
import Sizes from '@/components/Sizes/Sizes'
import Styles from '@/components/Styles/Styles'

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
				<Styles styles={[{style: 'lime', id: 'adasd'}, {style: 'grey', id: 'adasd'}]}/>
				<Sizes sizes={[{size: 'sm', id: 'adasd'}, {size: 'md', id: 'adasd'}]} />
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
