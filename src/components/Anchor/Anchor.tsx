import style from './Anchor.module.css'
import Link from 'next/link'

interface Props {
	url: string
	text: string
}

export default function Anchor({ url, text }: Props) {
	return (
		<Link href={url} className={style.anchor}>
			{text}
		</Link>
	)
}
