import styles from './Welcome.module.scss';
import { WelcomeProps } from './Welcome.props';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Button } from '@/components/Button/Button';

export const Welcome = ({ ...props }: WelcomeProps): JSX.Element => {
	return (
		<section className={styles.welcome}>
			<div className='container'>
				<div className={styles.content}>
					<h5 className={styles.pre_title}>This is Luxury Hotel</h5>
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
					// interval={10000}
					// transitionTime={2000}
					// showIndicators={false}
					showArrows={false}
					showThumbs={false}
					showStatus={false}
					// infiniteLoop
					// autoPlay
					>
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
