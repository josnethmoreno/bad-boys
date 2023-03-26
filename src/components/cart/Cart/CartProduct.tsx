import style from './CartProduct.module.css'
import Image from 'next/image'

import { PropsCartProduct } from '@/store/cartStore'

export function CartProduct({ image, name, color, size, price }: PropsCartProduct) {
	return (
		<div className={style.cartProduct}>
			<div className={style['cartProduct-img']}>
				<Image src={image} alt={image} fill={true}></Image>
			</div>
			<div className={style['cartProduct-data']}>
        <div>
          <h3>{name}</h3>
          <div>
            {color && <p><b>Color:</b> {color}</p>}
            {color && <p><b>Size:</b> {size}</p>}
          </div>  
        </div>
        <p>{price}</p>
			</div>
		</div>
	)
}
