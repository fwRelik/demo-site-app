import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import cn from 'classnames';

export const Button = ({ className, href = '', children, ...props }: ButtonProps): JSX.Element => {
	return href ? (
		<a href={href} className={cn(styles.button, className)} {...props}>
			{children}
		</a>
	) : (
		<a className={cn(styles.button, className)} {...props}>
			{children}
		</a>
	);
};
