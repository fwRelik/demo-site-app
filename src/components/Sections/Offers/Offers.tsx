import Image from 'next/image';
import styles from './Offers.module.scss';
import { OffersProps } from './Offers.props';

import { SectionTitles } from '@/components/SectionTitles/SectionTitles';

import ArrowRightIcon from '/public/icons/arrow-right.svg';

export const Offers = ({ ...props }: OffersProps): JSX.Element => {
	const sizes = { height: 290, width: 390 };

	return (
		<section className={styles.offers} {...props}>
			<div className='container'>
				<div className={styles.wrapper}>
					<div>
						<SectionTitles className={styles.section_title} level={'h3'} section_title>
							News & Offers
						</SectionTitles>
						<p className={styles.description}></p>
					</div>
					<div className={styles.cards}>
						<div>
							<a href='#'>
								<Image src='/images/offer1.jpg' alt={''} {...sizes} />
							</a>
							<div className={styles.information}>
								<time>August 20, 2022</time>
								<a href='#'>Comment (5)</a>
							</div>
							<h2>
								<a href='#'>Camping in Italy</a>
							</h2>
							<p>Quisque pretium fermentum quam, sit amet cursus ante sollicitudin </p>
							<a href='#' className={styles.read_more}>
								Read More <ArrowRightIcon />
							</a>
						</div>
						<div>
							<a href='#'>
								<Image src='/images/offer2.jpg' alt={''} {...sizes} />
							</a>
							<div className={styles.information}>
								<time>August 20, 2022</time>
								<a href='#'>Comment (5)</a>
							</div>
							<h2>
								<a href='#'>Camping in Italy</a>
							</h2>
							<p>Quisque pretium fermentum quam, sit amet cursus ante sollicitudin </p>
							<a href='#' className={styles.read_more}>
								Read More <ArrowRightIcon />
							</a>
						</div>
						<div>
							<a href='#'>
								<Image src='/images/offer3.jpg' alt={''} {...sizes} />
							</a>
							<div className={styles.information}>
								<time>August 20, 2022</time>
								<a href='#'>Comment (5)</a>
							</div>
							<h2>
								<a href='#'>Camping in Italy</a>
							</h2>
							<p>Quisque pretium fermentum quam, sit amet cursus ante sollicitudin </p>
							<a href='#' className={styles.read_more}>
								Read More <ArrowRightIcon />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
