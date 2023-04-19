import Image from 'next/image';
import styles from './Rooms.module.scss';
import { RoomsProps } from './Rooms.props';

import { SectionTitles } from '@/components/SectionTitles/SectionTitles';

export const Rooms = ({ ...props }: RoomsProps): JSX.Element => {
	return (
		<section className={styles.find_apartment}>
			<div className='container'>
				<div className={styles.wrapper}>
					<div>
						<SectionTitles level={'h5'} pre_title>
							The Luxury Hotel
						</SectionTitles>
						<SectionTitles level={'h3'} section_title>
							Rooms & Suites
						</SectionTitles>
					</div>
					<div className={styles.room_cards}>
						<div className={styles.card}>
							<div className={styles.card_inner}>
								<div className={styles.card_front}>Front</div>
								<div className={styles.card_back}>Back</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
