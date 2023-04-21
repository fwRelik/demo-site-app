import Image from 'next/image';
import styles from './FindApartment.module.scss';
import { FindApartmentProps } from './FindApartment.props';

import RankingIcon from '/public/icons/ranking.svg';
import HotelIcon from '/public/icons/hotel.svg';
import { SectionTitles } from '@/components/SectionTitles/SectionTitles';
import useLangaugePack from '@/hooks/useLanguagePack';

export const FindApartment = ({ ...props }: FindApartmentProps): JSX.Element => {
	const { t } = useLangaugePack();

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
								{t('about_pre_title')}
							</SectionTitles>
							<SectionTitles level={'h3'} section_title>
								{t('about_title')}
							</SectionTitles>

							<h2>{t('about_subtitle')}</h2>
							<p>{t('about_description')}</p>
						</div>

						<div className={styles.advantages}>
							<div>
								<HotelIcon />
								<h5>{t('about_advantages_1')}</h5>
								<p>{t('about_advantages_description_1')}</p>
							</div>
							<div>
								<RankingIcon />
								<h5>{t('about_advantages_2')}</h5>
								<p>{t('about_advantages_description_2')}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
