import style from './Jumbo.module.css'

import Image from 'next/image'

interface Props {
	img: string
}

export default function Jumbo({ img }: Props) {
	return (
		<div className={style.jumbo}>
			<figure>
				<Image
					src={img}
					alt=''
					fill={true}
					sizes='(max-width: 768px) 100vw, 33vw'
				/>
			</figure>
		</div>
	)
}
