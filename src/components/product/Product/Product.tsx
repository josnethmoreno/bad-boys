import style from './Product.module.css'

import ProductImages from './ProductImages/ProductImages'
import ProductInfo from './ProductInfo/ProductInfo'

import { ProductInterface } from '@/services/products.service'

interface Props {
  product: ProductInterface
}

export default function Product({ product }: Props) {
  const {
    id,
		images,
		name,
		price,
		styles,
		sizes,
		description
	} = product

  return(
    <div className={style.product}>
      <ProductImages images={images}/>
      <ProductInfo id={id} name={name} price={price} styles={styles} sizes={sizes} description={description} />
    </div>
  )
}