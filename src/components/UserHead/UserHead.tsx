import { UserHeadProps } from './UserHead.props';
import styles from './UserHead.module.scss';

import UserIcon from '/public/icons/user.svg';

export const UserHead = ({ userName, className, children, ...props }: UserHeadProps): JSX.Element => {
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
