'use client'

import Button from '../Button/Button'
import { Close, Lines, Barcode, Palmer } from '../Icons/Icons'

import style from './Cart.module.css'

interface Props {
  show: boolean,
  setShow: any
}

export default function Cart({show, setShow} : Props) {

  return (
    <div className={style.cart} data-show={show}>
      <header className={style['cart-header']}>
        <h2>Your cart</h2>
        <p>
          <span>Marcus: Mike, you dont need a grenade launcher.</span>
          <span>Mike: Yeah, but i want one</span>
        </p>
        <button onClick={setShow(false)}>
          <Close/>
        </button>
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
          <Lines></Lines>
          <span>Unofficial bad boys store</span>
          <Palmer></Palmer>
          <span>Unofficial bad boys store</span>
          <Barcode></Barcode>
        </div>
      </footer>
    </div>
  )
}

