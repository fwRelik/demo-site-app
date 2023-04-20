import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import Image from 'next/image';
import { Button } from '@/components/Button/Button';

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
	return (
		<div className={styles.header} {...props}>
			<div className='container'>
				<div className={styles.wrapper}>
					<a href='#' className={styles.logo}>
						<Image src='/images/logo.png' height={22} width={125} alt={'Site Logo'} />
					</a>
					<nav className={styles.navigation}>
						<ul className={styles.puncts}>
							<li className={styles.punct}>
								<a href='#'>Home</a>
							</li>
							<li className={styles.punct}>
								<a href='#'>About</a>
							</li>
							<li className={styles.punct}>
								<a href='#'>Rooms & Suites</a>
							</li>
							<li className={styles.punct}>
								<a href='#'>Pages</a>
							</li>
							<li className={styles.punct}>
								<a href='#'>Blogs</a>
							</li>
							<li className={styles.punct}>
								<a href='#'>Contact</a>
							</li>
						</ul>
						<div className={styles.button}>
							<Button href='#'>Get a Quote</Button>
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
};
