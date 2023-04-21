import Image from 'next/image';
import styles from './Footer.module.scss';
import { FooterProps } from './Footer.props';

import { SectionTitles } from '@/components/SectionTitles/SectionTitles';

import ArrowRightIcon from '/public/icons/arrow-right.svg';
import FacebookIcon from '/public/icons/facebook.svg';
import PinterestIcon from '/public/icons/pinterest.svg';
import InstagramIcon from '/public/icons/instagram.svg';
import { Button } from '@/components/Button/Button';
import useLangaugePack from '@/hooks/useLanguagePack';

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
	const { t } = useLangaugePack();

	return (
		<footer id='contact' className={styles.footer}>
			<div className='container'>
				<div className={styles.wrapper}>
					<div className={styles.logo_wrapper}>
						<Image src='/images/logo.png' height={22} width={125} alt={'Site Logo'} />
						<p>{t('footer_description')}</p>
						<div className={styles.icons}>
							<ul>
								<li>
									<FacebookIcon />
								</li>
								<li>
									<PinterestIcon />
								</li>
								<li>
									<InstagramIcon />
								</li>
							</ul>
						</div>
					</div>
					<div className={styles.general_wrapper}>
						<SectionTitles className={styles.list_title} level={'h3'}>
							{t('footer_general_title')}
						</SectionTitles>
						<ul>
							<li>
								<ArrowRightIcon />
								<span>Accommodation</span>
							</li>
							<li>
								<ArrowRightIcon />
								<span>Dine & Drink</span>
							</li>
							<li>
								<ArrowRightIcon />
								<span>Spa & Leisure</span>
							</li>
							<li>
								<ArrowRightIcon />
								<span>Services</span>
							</li>
						</ul>
					</div>
					<div className={styles.contact_wrapper}>
						<SectionTitles className={styles.list_title} level={'h3'}>
							{t('footer_contact_us_title')}
						</SectionTitles>
						<ul>
							<li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
							<li>
								<address>
									<span>A:</span> Via Venti Settembre, Roma
								</address>
							</li>
							<li>
								<span>E:</span> <a href='mailto:example@mail.com'>example@mail.com</a>
							</li>
							<li>
								<span>P:</span> +00 000 000 00 00
							</li>
						</ul>
					</div>
					<div className={styles.newsletter_wrapper}>
						<SectionTitles className={styles.list_title} level={'h3'}>
							{t('footer_newsletter_title')}
						</SectionTitles>
						<ul>
							<li>
								<form action=''>
									<input
										className={styles.newsletter}
										name='newsletter'
										type='text'
										placeholder='Enter your email...'
									/>
									<button>
										<ArrowRightIcon />
									</button>
								</form>
							</li>
							<li>
								<Image src='/images/payment.png' height={45} width={255} alt={''} />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};
