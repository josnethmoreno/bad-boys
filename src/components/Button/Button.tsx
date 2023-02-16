import style from './Button.module.css'

interface Props {
  text: string,
  size: string,
}

export default function Button({ text, size } : Props) {
  return (
    <button className={style.button} data-size={size} data-style={style}>{text}</button>
  )
}