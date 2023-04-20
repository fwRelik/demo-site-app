import Image from 'next/image';
import cn from 'classnames';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import { Button } from '@/components/Button/Button';
import { useEffect, useState } from 'react';

export const Header = ({ offset = 10, ...props }: HeaderProps): JSX.Element => {
	const [active, setActive] = useState<boolean>(false);
	const [mobileActive, setMobileActive] = useState<boolean>(false);

	const scrollHandler = () => (window.scrollY >= offset ? setActive(true) : setActive(false));

	useEffect(() => {
		window.addEventListener('scroll', scrollHandler);
		return () => window.removeEventListener('scroll', scrollHandler);
	}, []);

	return (
		<div
			className={cn(styles.header, {
				[styles.active]: active,
			})}
			{...props}>
			<div className='container'>
				<div className={styles.wrapper}>
					<a href='#' className={styles.logo}>
						<Image src='/images/logo.png' height={22} width={125} alt={'Site Logo'} />
					</a>
					<nav className={styles.navigation} onClick={() => setMobileActive(!mobileActive)}>
						<ul
							className={cn(styles.puncts, {
								[styles.active]: mobileActive,
							})}>
							<li className={styles.punct}>
								<a href='#home'>Home</a>
							</li>
							<li className={styles.punct}>
								<a href='#about'>About</a>
							</li>
							<li className={styles.punct}>
								<a href='#room-suites'>Rooms & Suites</a>
							</li>
							<li className={styles.punct}>
								<a href='#facilities'>facilities</a>
							</li>
							<li className={styles.punct}>
								<a href='#offers'>Offers</a>
							</li>
							<li className={styles.punct}>
								<a href='#contact'>Contact</a>
							</li>
						</ul>
						<div className={styles.button}>
							<Button>Get a Quote</Button>
						</div>
						<span
							className={cn(styles.mobile_button, {
								[styles.active]: mobileActive,
							})}
							onClick={() => setMobileActive(!mobileActive)}></span>
					</nav>
				</div>
			</div>
		</div>
	);
};
