import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.scss';
import cn from 'classnames';
import { useRouter } from 'next/router';

export const Sidebar = ({ className, children, ...props }: SidebarProps): JSX.Element => {
	const router = useRouter();

	return (
		<aside className={styles.sidebar} {...props}>
			<div className={styles.information}>
				<a href='/admin'>Admin Panel</a>
			</div>
			<nav className={styles.navigation}>
				<ul>
					<li
						className={cn({
							[styles.active]: router.pathname == '/admin/pages',
						})}>
						<a href='/admin/pages'>Pages</a>
					</li>
				</ul>
			</nav>
			<div className={styles.footer}>
				Created <span>by</span> fwRelik.
			</div>
		</aside>
	);
};
