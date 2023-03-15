'use client'
import style from './Sizes.module.css'
import { MouseEvent, useState } from 'react'
import Button from '../Button/Button'

interface Props {
	sizes: Size[]
}

export interface Size {
  size: string;
  id:   string;
}

export default function Sizes({ sizes }: Props) {
	const [selectStyle, setSelectStyle] = useState('')

	const handleSize = (s: string) => {
		setSelectStyle(s)
	}

	return (
		<div className={style.sizes}>
			<span>Size: {selectStyle} </span>
			<div>
				{sizes.map((s: Size) => (
					<button key={s.size} className={style['size-button']} onClick={() => handleSize(s.size)}>
						{s.size}
					</button>
				))}
			</div>
			<Button text='Add to cart' type='fill' />
		</div>
	)
}
