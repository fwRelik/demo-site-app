import Image from 'next/image';
import styles from './FindApartment.module.scss';
import { FindApartmentProps } from './FindApartment.props';

import RankingIcon from '/public/icons/ranking.svg';
import HotelIcon from '/public/icons/hotel.svg';
import { SectionTitles } from '@/components/SectionTitles/SectionTitles';

export const FindApartment = ({ ...props }: FindApartmentProps): JSX.Element => {
	return (
		<section id='about' className={styles.find_apartment} {...props}>
			<div className='container'>
				<div className={styles.wrapper}>
					<div className={styles.room_images}>
						<Image src='/images/room1.jpg' width={300} height={440} alt={''} />
						<Image
							className={styles.transform_image}
							src='/images/room2.jpg'
							width={300}
							height={440}
							alt={''}
						/>
					</div>
					<div>
						<div className={styles.text_content}>
							<SectionTitles level={'h5'} pre_title>
								The Best Luxury Hotel
							</SectionTitles>
							<SectionTitles level={'h3'} section_title>
								Find the right Apartment
							</SectionTitles>

							<h2>Hotel & Resort for you</h2>
							<p>
								Over 39,000 people work for us in more than 70 countries all over the This breadth of
								global coverage, combined with specialist services
							</p>
						</div>

						<div className={styles.advantages}>
							<div>
								<HotelIcon />
								<h5>5 Star Hotel In World</h5>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati earum quibusdam
									numquam dolor.
								</p>
							</div>
							<div>
								<RankingIcon />
								<h5>Best Environment</h5>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, repellat illo rem
									accusantium.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
