import style from './MenuLinks.module.css'

import Anchor from "@/components/ui/Anchor/Anchor"

export default function MenuLinks() {
	return (
		<div className={style['menu-links']}>
			<ul>
				<li>
					<Anchor url='/' text='Shop' />
				</li>
				<li>
					<Anchor url='/info' text='Info' />
				</li>
				<li>
					<Anchor url='/faq' text='Faq' />
				</li>
				<li>
					<Anchor url='/gallery' text='Gallery' />
				</li>
			</ul>
			<span>
				Unofficial bad boys <br />
				movie merch store
			</span>
		</div>
	)
}
