import style from './Button.module.css'

interface Props {
  text: string,
  type: string,
}

export default function Button({ text, type } : Props) {
  return (
    <button className={style.button} data-type={type} data-style={style}>{text}</button>
  )
}