import styles from './Facilities.module.scss';
import { FacilitiesProps } from './Facilities.props';

import { SectionTitles } from '@/components/SectionTitles/SectionTitles';

import ParkingIcon from '/public/icons/parking.svg';
import BellIcon from '/public/icons/bell.svg';
import WifiIcon from '/public/icons/wifi.svg';
import MugIcon from '/public/icons/mug.svg';
import UmbrellaIcon from '/public/icons/umbrella.svg';
import ShowerIcon from '/public/icons/shower.svg';

export const Facilities = ({ ...props }: FacilitiesProps): JSX.Element => {
	return (
		<section className={styles.facilities}>
			<div className='container'>
				<div className={styles.wrapper}>
					<div>
						<SectionTitles className={styles.pre_title} level={'h5'} pre_title>
							Hotel Facilities
						</SectionTitles>
						<SectionTitles className={styles.section_title} level={'h3'} section_title>
							Finest And Luxurious Hotel In The Town
						</SectionTitles>
						<p className={styles.description}>
							A wonderful serenity has taken possession of my entire soul, like these sweet mornings of
							spring which I enjoy with my whole heart.
						</p>
					</div>
					<ul>
						<li>
							<ParkingIcon />
							<span>Parking</span>
						</li>
						<li>
							<BellIcon />
							<span>Parking</span>
						</li>
						<li>
							<WifiIcon />
							<span>Parking</span>
						</li>
						<li>
							<MugIcon />
							<span>Parking</span>
						</li>
						<li>
							<UmbrellaIcon />
							<span>Parking</span>
						</li>
						<li>
							<ShowerIcon />
							<span>Parking</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};
