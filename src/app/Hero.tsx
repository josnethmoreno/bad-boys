import style from './Hero.module.css'

import Logo from '@/components/Logo/Logo'

export default function Hero() {
  return (
    <section className={style.hero}>
      <Logo />
    </section>
  )
}

