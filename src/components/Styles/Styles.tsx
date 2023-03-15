'use client'
import { MouseEvent, useState, useRef } from 'react'
import style from './Styles.module.css'

interface Props {
	styles: Style[]
}

export interface Style {
	style: string
	id: string
}

export default function Styles({ styles }: Props) {
	const [selectStyle, setSelectStyle] = useState('')

	const handleStyle = (s: string, e: MouseEvent) => {
		setSelectStyle(s)
		const styles = document.querySelectorAll('.style')
		styles.forEach(s => s.setAttribute('data-active', 'false'))
		e.currentTarget.setAttribute('data-active', 'true')
	}

	return (
		<div className={style.styles}>
			<span>Style: {selectStyle}</span>
			{styles.map((s) => (
				<button
					key={s.style}
					className='style'
					data-style={s.style.toLowerCase()}
					data-active={false}
					onClick={(e) => handleStyle(s.style, e)}></button>
			))}
		</div>
	)
}
