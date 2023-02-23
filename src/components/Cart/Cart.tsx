import Image from 'next/image'

import Button from '../Button/Button'
import style from './Cart.module.css'

import Abstract from '/cart/abstract.svg'
import palmer from '/cart/palmer.svg'
import barcode from '/cart/barcode.svg'

interface SVG {
  abstract: string
}

export default function Cart() {
  return (
    <div className={style.cart}>
      <header className={style['cart-header']}>
        <h2>Your cart</h2>
        <p>
          <span>Marcus: Mike, you dont need a grenade launcher.</span>
          <span>Mike: Yeah, but i want one</span>
        </p>
      </header>
      <div className={style['cart-products']}>

      </div>
      <footer className={style['cart-footer']}>
        <Button text="Continue to payment" type="fill"></Button>
        <p>
          <span>Total</span>
          <span>$0 USD</span>
        </p>
        <div>
          <Image />
        </div>
      </footer>
    </div>
  )
}

