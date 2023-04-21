import Image from 'next/image';
import cn from 'classnames';
import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import { Button } from '@/components/Button/Button';
import { useEffect, useState } from 'react';
import useLangaugePack from '@/hooks/useLanguagePack';
import { SelectedResourceType } from '@/features/language/languageSlice';

export const Header = ({ offset = 10, onLanguageButton = true, ...props }: HeaderProps): JSX.Element => {
	const { t, changeLanguage, selectedResource, languagePackages } = useLangaugePack();
	const [active, setActive] = useState<boolean>(false);
	const [mobileActive, setMobileActive] = useState<boolean>(false);

	const scrollHandler = () => (window.scrollY >= offset ? setActive(true) : setActive(false));

	const languageSelect = onLanguageButton ? (
		<select
			name='language'
			className={styles.lang}
			value={selectedResource}
			onChange={target => changeLanguage(target.target.value as SelectedResourceType)}>
			{languagePackages.map(lang => (
				<option key={lang} value={lang}>
					{lang.toUpperCase()}
				</option>
			))}
		</select>
	) : (
		''
	);

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
					<nav className={styles.navigation}>
						<ul
							className={cn(styles.puncts, {
								[styles.active]: mobileActive,
							})}
							onClick={() => setMobileActive(!mobileActive)}>
							<li className={styles.punct}>
								<a href='#home'>{t('header_home')}</a>
							</li>
							<li className={styles.punct}>
								<a href='#about'>{t('header_about')}</a>
							</li>
							<li className={styles.punct}>
								<a href='#room-suites'>{t('header_rooms_suites')}</a>
							</li>
							<li className={styles.punct}>
								<a href='#facilities'>{t('header_facilities')}</a>
							</li>
							<li className={styles.punct}>
								<a href='#offers'>{t('header_offers')}</a>
							</li>
							<li className={styles.punct}>
								<a href='#contact'>{t('header_contact')}</a>
							</li>
						</ul>
						{languageSelect}
						<div className={styles.button}>
							<Button>Get a Quote</Button>
						</div>
						<div className={styles.mobile_button} onClick={() => setMobileActive(!mobileActive)}>
							<span
								className={cn({
									[styles.active]: mobileActive,
								})}></span>
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
};
