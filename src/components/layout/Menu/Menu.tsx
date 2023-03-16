
import style from './Menu.module.css'

import MenuBrand from './MenuBrand/MenuBrand'
import MenuLinks from './MenuLinks/MenuLinks'
import MenuActions from './MenuActions/MenuActions'

export default function Nav() {
	return (
		<nav className={style.menu}>
			<MenuBrand />
			<MenuLinks />
			<MenuActions />
		</nav>
	)
}
