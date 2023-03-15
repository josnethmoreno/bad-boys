'use client'
import { MouseEvent, useState, useRef } from 'react'
import style from './Styles.module.css'

interface Props {
	styles: Style[]
}

export interface Style {
  style: string;
  id:    string;
}

export default function Styles({ styles }: Props) {
	const [selectStyle, setSelectStyle] = useState('')

	const handleStyle = (s: string) => {
		setSelectStyle(s)
	}

	return (
		<div className={style.styles}>
			<span>Style: {selectStyle}</span>
			{styles.map((s) => (
				<button key={s.style} data-style={s.style.toLowerCase()} data-active={false} onClick={() => handleStyle(s.style)}></button>
			))}
		</div>
	)
}
