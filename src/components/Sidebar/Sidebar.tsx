import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.scss';
import cn from 'classnames';
import { useRouter } from 'next/router';

export const Sidebar = ({ list, className, children, ...props }: SidebarProps): JSX.Element => {
	const router = useRouter();
	const items = list
		? list.map(punct => {
				return (
					<li
						key={punct.name}
						className={cn({
							[styles.active]: router.pathname == punct.link,
						})}>
						{punct.action ? (
							<button onClick={() => (punct.action ? punct.action() : {})}>{punct.name}</button>
						) : (
							<a href={punct.link}>{punct.name}</a>
						)}
					</li>
				);
		  })
		: '';

	return (
		<aside className={styles.sidebar} {...props}>
			<div className={styles.information}>
				<a href='/admin'>Admin Panel</a>
			</div>
			<nav className={styles.navigation}>
				<ul>{items}</ul>
			</nav>
			<div className={styles.footer}>
				Created <span>by</span> fwRelik.
			</div>
		</aside>
	);
};
