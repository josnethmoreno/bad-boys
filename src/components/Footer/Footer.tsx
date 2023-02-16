import style from './Footer.module.css'

import Button from '../Button/Button'
import Anchor from '../Anchor/Anchor'

export function Form() {
	return (
		<form className={style.form}>
			<p>We ride together. We die together</p>
			<div>
				<input type='mail' placeholder='email' />
				<Button text='Subscribe' size='sm' />
			</div>
		</form>
	)
}

export function Links() {
	return (
		<nav className={style.links}>
			<div>
				<div>
					<Anchor url='/' text='Shop' />
					<Anchor url='/info' text='Info' />
					<Anchor url='/faq' text='Faq' />
				</div>
				<div>
					<Anchor url='/' text='Terms' />
					<Anchor url='/info' text='Privacy' />
					<Anchor url='/faq' text='Returns' />
				</div>
				<div>
					<Anchor url='/' text='Shipping' />
					<Anchor url='/info' text='Instagram' />
					<Anchor url='/faq' text='Twitter' />
				</div>
			</div>
			<button>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					height='32'
					viewBox='0 96 960 960'
					width='32'
					fill='currentColor'>
					<path d='M450 936V330l-90 90-42-42 162-162 162 162-42 42-90-90v606h-60Z' />
				</svg>
			</button>
		</nav>
	)
}

export function Data() {
	const date = new Date()
	return (
		<div className={style.data}>
			<Anchor url='/gallery' text='View the gallery' />
			<div>
				<p>© 2023 - OFFICIAL BAD BOYS MOVIE MERCH STORE</p>
				<div>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						height='36'
						viewBox='0 96 960 960'
						width='36'
						fill='currentColor'>
						<path d='M480 976q-84 0-157-31.5T196 859q-54-54-85-127.5T80 574q0-84 31-156.5T196 291q54-54 127-84.5T480 176q84 0 157 30.5T764 291q54 54 85 126.5T880 574q0 84-31 157.5T764 859q-54 54-127 85.5T480 976Zm0-58q35-36 58.5-82.5T577 725H384q14 60 37.5 108t58.5 85Zm-85-12q-25-38-43-82t-30-99H172q38 71 88 111.5T395 906Zm171-1q72-23 129.5-69T788 725H639q-13 54-30.5 98T566 905ZM152 665h159q-3-27-3.5-48.5T307 574q0-25 1-44.5t4-43.5H152q-7 24-9.5 43t-2.5 45q0 26 2.5 46.5T152 665Zm221 0h215q4-31 5-50.5t1-40.5q0-20-1-38.5t-5-49.5H373q-4 31-5 49.5t-1 38.5q0 21 1 40.5t5 50.5Zm275 0h160q7-24 9.5-44.5T820 574q0-26-2.5-45t-9.5-43H649q3 35 4 53.5t1 34.5q0 22-1.5 41.5T648 665Zm-10-239h150q-33-69-90.5-115T565 246q25 37 42.5 80T638 426Zm-254 0h194q-11-53-37-102.5T480 236q-32 27-54 71t-42 119Zm-212 0h151q11-54 28-96.5t43-82.5q-75 19-131 64t-91 115Z' />
					</svg>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						height='36'
						viewBox='0 96 960 960'
						width='36'
						fill='currentColor'>
						<path d='M468 816q-96-5-162-74t-66-166q0-100 70-170t170-70q97 0 166 66t74 163l-63-20q-11-64-60-106.5T480 396q-75 0-127.5 52.5T300 576q0 67 42.5 116.5T449 753l19 63Zm48 158q-9 1-18 1.5t-18 .5q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576q0 9-.5 18t-1.5 18l-58-18v-18q0-142-99-241t-241-99q-142 0-241 99t-99 241q0 142 99 241t241 99h18l18 58Zm305 22L650 825l-50 151-120-400 400 120-151 50 171 171-79 79Z' />
					</svg>
				</div>
			</div>
			<hr />
			<small>
				Bad Boys Store is owned and operated by Good Goods Merch LLC under
				license from Sony Pictures Consumer Products Inc., and Platypus Wear
				Inc. Good Goods Merch LLC is responsible for the site content and all
				aspects of your purchase.
			</small>
		</div>
	)
}

export default function Footer() {
	return (
		<footer className={style.footer}>
			<div>
				<Form />
				<Links />
			</div>
			<div>
				<svg className={style.logo} viewBox='0 0 1400 321' fill='none'>
					<path
						d='M570.72 43.27L524.774.016H393.242v320.271h131.532l45.946-43.252V43.269zm-82.018 218.004h-15.98v-198.8h15.98v198.8zM968.241.06H877.61l-45.947 43.253v233.642l45.947 43.252h90.631l45.949-43.252V43.313L968.241.06zm-37.333 259.404h-15.98V60.804h15.98v198.66zM140.612 156.79l32.038-26.166V41.721L128.977.027H0v320.271h131.532l45.946-43.252v-87.564l-36.866-32.692zM95.46 261.284H79.48v-73.53h15.98v73.53zm0-134.413H79.48V62.483h15.98v64.388zM781.607 156.781l32.038-26.167V41.712L769.972.017H640.995v320.271h131.531l45.947-43.252v-87.563l-36.866-32.692zm-45.153 104.493h-15.98v-73.53h15.98v73.53zm0-134.413h-15.98V62.473h15.98v64.388zM341.327.017H229.155l-40.776 320.271h79.449l.155-1.651 2.96-53.594h28.611l2.959 53.594.156 1.651h79.449L341.327.018zm-66.724 198.816l6.728-121.563h7.819l6.728 121.563h-21.275zM1355.95 128.138h-53.42l.12-66.521h15.98v44.498h79.33V41.712L1354.29.017h-84.22l-43.67 41.695v105.054h1.14l43.67 41.679 51.47-.327-.18 76.224h-15.98v-46.133h-80.12v60.4l43.67 41.679h85.88l43.68-41.679V169.833l-43.68-41.695zM1148.88 0l-26.06 118.573h-4.37L1092.39.125h-78.76l65.38 182.774h-.36v137.419h83.28V182.899h.33L1227.64 0h-78.76z'
						fill='currentColor'></path>
				</svg>
				<Data />
			</div>
		</footer>
	)
}
