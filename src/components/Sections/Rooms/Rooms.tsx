import styles from './Rooms.module.scss';
import { RoomsProps } from './Rooms.props';

import { SectionTitles } from '@/components/SectionTitles/SectionTitles';
import { Button } from '@/components/Button/Button';
import useLangaugePack from '@/hooks/useLanguagePack';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export const Rooms = ({ ...props }: RoomsProps): JSX.Element => {
	const { roomPages } = useSelector((state: RootState) => state.pagesReducer);
	const { t } = useLangaugePack();

	const cards = roomPages.map(page => {
		return (
			<div key={page._id} className={styles.card}>
				<div className={styles.card_inner}>
					<div className={styles.card_front}>
						<div className={styles.price}>From $90/night</div>
						<div className={styles.text_wrapper}>
							<div className={styles.title}>{page.roomName}</div>
							<div className={styles.description}>{page.roomDescription}</div>
						</div>
					</div>
					<div className={styles.card_back}>
						<div className={styles.text_wrapper}>
							<div className={styles.title}>{page.roomName}</div>
							<div className={styles.description}>
								Architecture viverra tristique ustoni an missten vitae diam neque nivamus the aestan the
								atene artines arinianu ateli ine finibus viverra nec lacus.
							</div>
							<Button href={`/room/${page._id}`} className={styles.button}>
								Book Now
							</Button>
						</div>
					</div>
					<img className={styles.overlay_image} src={page.roomImagePath} alt={page.description} />
				</div>
			</div>
		);
	});

	return (
		<section id='room-suites' className={styles.rooms} {...props}>
			<div className='container'>
				<div className={styles.wrapper}>
					<div>
						<SectionTitles className={styles.pre_title} level={'h5'} pre_title>
							{t('rooms_pre_title')}
						</SectionTitles>
						<SectionTitles className={styles.section_title} level={'h3'} section_title>
							{t('rooms_title')}
						</SectionTitles>
					</div>
					<div className={styles.room_cards}>{cards}</div>
				</div>
			</div>
		</section>
	);
};
