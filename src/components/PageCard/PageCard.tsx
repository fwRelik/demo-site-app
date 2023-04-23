import { PageCardProps } from './PageCard.props';
import styles from './PageCard.module.scss';
import cn from 'classnames';

export const PageCard = ({ pages, className, children, ...props }: PageCardProps): JSX.Element => {
	if (!pages) return <h1>No pages</h1>;

	const cards = pages.map(page => {
		return page.roomName ? (
			<li key={page._id}>
				<span className={styles.title}>{page.title}</span>
				<span className={styles.description}>{page.description}</span>
				<div className={styles.information}>
					<span>Is removable: {page.removable.toString()}</span>
					<span>ID: {page._id}</span>
				</div>
				<a className={styles.button} href={`pages/${page._id}`}>
					Edit
				</a>
				
			</li>
		) : (
			<li key={page._id}>
				<span className={styles.title}>{page.title}</span>
				<span className={styles.description}>{page.description}</span>
				<div className={styles.information}>
					<span>Is removable: {page.removable.toString()}</span>
					<span>ID: {page._id}</span>
				</div>
				<a className={styles.button} href={`pages/main-page`}>
					Edit
				</a>
			</li>
		);
	});

	return (
		<div className={styles.pages} {...props}>
			<ul>{cards}</ul>
		</div>
	);
};
