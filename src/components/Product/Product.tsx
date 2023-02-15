import style from './Product.module.css'

import Link from "next/link"
import Image from "next/image"

interface Props {
  url: string,
  img: string,
  title: string
}

export default function Product({ url, img, title } : Props) {
  return (
    <div className={style.product}>
      <Link href={url}>
        <figure className={style['product-img']}>
          <Image src={img} alt="" fill={true}/>
        </figure>
        <p className={style['product-title']}>{title}</p>
      </Link>
    </div>
  )
}