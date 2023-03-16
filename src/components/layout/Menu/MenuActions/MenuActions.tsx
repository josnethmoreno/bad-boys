import style from './MenuActions.module.css'

export default function MenuActions() {
	return (
		<div className={style['menu-actions']}>
			<button onClick={() => console.log('Open cart')}>Cart usd 0 items</button>
			<div className={style['menu-theme']}>
				<button data-theme='black'></button>
				<button data-theme='white'></button>
				<button data-theme='artic'></button>
			</div>
		</div>
	)
}
