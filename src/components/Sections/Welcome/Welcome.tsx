import styles from './Welcome.module.scss';
import { WelcomeProps } from './Welcome.props';
import { Carousel } from 'react-responsive-carousel';
import { Button } from '@/components/Button/Button';
import { SectionTitles } from '@/components/SectionTitles/SectionTitles';

export const Welcome = ({ ...props }: WelcomeProps): JSX.Element => {
	return (
		<section id='home' className={styles.welcome} {...props}>
			<div className='container'>
				<div className={styles.content}>
					<SectionTitles level={'h5'} className={styles.pre_title} pre_title>
						This is Luxury Hotel
					</SectionTitles>

					<h1 className={styles.title}>Superior Hotel In World</h1>
					<span className={styles.line}></span>
					<p className={styles.description}>
						A wonderful serenity has taken possession of my entrie soul, like these sweet mornings of spring
						which I enjoy with my whole heart.
					</p>
					<Button className={styles.button} href='#'>
						Rooms & Suits
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
