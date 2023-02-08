import styles from './Anchor.module.css'
import Link from 'next/link'

interface Props {
	url: string
	text: string
}

export default function Anchor({ url, text }: Props) {
	return (
		<Link href={url} className={styles.anchor}>
			{text}
		</Link>
	)
}
