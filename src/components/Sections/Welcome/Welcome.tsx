import styles from './Welcome.module.scss';
import { WelcomeProps } from './Welcome.props';
import { Carousel } from 'react-responsive-carousel';
import { Button } from '@/components/Button/Button';
import { SectionTitles } from '@/components/SectionTitles/SectionTitles';
import useLangaugePack from '@/hooks/useLanguagePack';

export const Welcome = ({ ...props }: WelcomeProps): JSX.Element => {
	const { t } = useLangaugePack();

	return (
		<section id='home' className={styles.welcome} {...props}>
			<div className='container'>
				<div className={styles.content}>
					<SectionTitles level={'h5'} className={styles.pre_title} pre_title>
						{t('welcome_pre_title')}
					</SectionTitles>

					<h1 className={styles.title}>{t('welcome_title')}</h1>
					<span className={styles.line}></span>
					<p className={styles.description}>{t('welcome_description')}</p>
					<Button className={styles.button} href='#'>
						{t('welcome_button_text')}
					</Button>
				</div>
			</div>
			<div className={styles.carousel_wrapper}>
				<Carousel
					interval={10000}
					transitionTime={2000}
					showIndicators={false}
					showArrows={false}
					showThumbs={false}
					showStatus={false}
					infiniteLoop
					autoPlay>
					<div>
						<img className={styles.slider_image} src='/images/slider1.jpg' alt={''} />
					</div>
					<div>
						<img className={styles.slider_image} src='/images/slider2.jpg' alt={''} />
					</div>
				</Carousel>
			</div>
		</section>
	);
};
