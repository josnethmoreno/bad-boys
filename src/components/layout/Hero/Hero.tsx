import { Logotipo } from '@/components/icons/Icons/Icons'
import style from './Hero.module.css'

export default function Hero() {
  return (
    <section className={style.hero}>
      <Logotipo hero={true}></Logotipo>
    </section>
  )
}

