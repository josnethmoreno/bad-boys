'use client'
import style from './Sizes.module.css'
import { MouseEvent, useState } from 'react'
import Button from '../../ui/Anchor/Button/Button'

interface Props {
	sizes: Size[]
}

export interface Size {
	size: string
	id: string
}

export default function Sizes({ sizes }: Props) {
	const [selectStyle, setSelectStyle] = useState('')

	const handleSize = (s: string, e: MouseEvent) => {
		setSelectStyle(s)
		const buttons = document.querySelectorAll('.size')
		buttons.forEach((b) => {
			b.setAttribute('data-active', 'false')
		})
		e.currentTarget.setAttribute('data-active', 'true')
	}

	return (
		<div className={style.sizes}>
			<span>Size: {selectStyle} </span>
			<div>
				{sizes.map((s: Size) => (
					<button
						key={s.id}
						className={`${style['size-button']} size`}
						onClick={(e) => handleSize(s.size, e)}>
						{s.size}
					</button>
				))}
			</div>
		</div>
	)
}
