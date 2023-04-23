import { AdminHeaderProps } from './AdminHeader.props';
import styles from './AdminHeader.module.scss';

import UserIcon from '/public/icons/user.svg';

export const AdminHeader = ({ userName, className, children, ...props }: AdminHeaderProps): JSX.Element => {
	return (
		<div className={styles.head}>
			<div className={styles.information}>
				<span className={styles.name}>{userName ?? ''}</span>
				<UserIcon />

				<div className={styles.drop_menu}>
					<button>Logout</button>
				</div>
			</div>
		</div>
	);
};
