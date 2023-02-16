import Button from '../Button/Button'
import style from './Footer.module.css'

export function Form() {
	return (
		<form className={style.form}>
			<p>We ride together. We die together</p>
			<div>
				<input type='mail' />
				<Button text='Subscribe' size='sm'/>
			</div>
		</form>
	)
}

export default function Footer() {
	return (
		<footer className={style.footer}>
			<div>
				<Form />
			</div>
			<div></div>
		</footer>
	)
}
