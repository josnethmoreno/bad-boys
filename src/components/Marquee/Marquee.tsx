import style from './Marquee.module.css'

interface Props {
  text: string
}

export default function Marquee({ text } : Props) {
	return (
		<div className={style.marquee}>
			<p>
				<span>
					{text}
				</span>
				<span aria-hidden='true'>
					{text}
				</span>
        <span aria-hidden='true'>
					{text}
				</span>
				<span aria-hidden='true'>
					{text}
				</span>
			</p>
		</div>
	)
}
