import styles from './Facilities.module.scss';
import { FacilitiesProps } from './Facilities.props';

import { SectionTitles } from '@/components/SectionTitles/SectionTitles';

import ParkingIcon from '/public/icons/parking.svg';
import BellIcon from '/public/icons/bell.svg';
import WifiIcon from '/public/icons/wifi.svg';
import MugIcon from '/public/icons/mug.svg';
import UmbrellaIcon from '/public/icons/umbrella.svg';
import ShowerIcon from '/public/icons/shower.svg';
import useLangaugePack from '@/hooks/useLanguagePack';

export const Facilities = ({ ...props }: FacilitiesProps): JSX.Element => {
	const { t } = useLangaugePack();

	return (
		<section id='facilities' className={styles.facilities} {...props}>
			<div className='container'>
				<div className={styles.wrapper}>
					<div>
						<SectionTitles className={styles.pre_title} level={'h5'} pre_title>
							{t('facilities_pre_title')}
						</SectionTitles>
						<SectionTitles className={styles.section_title} level={'h3'} section_title>
							{t('facilities_title')}
						</SectionTitles>
						<p className={styles.description}>{t('facilities_description')}</p>
					</div>
					<ul>
						<li>
							<ParkingIcon />
							<span>Parking</span>
						</li>
						<li>
							<BellIcon />
							<span>Alarm</span>
						</li>
						<li>
							<WifiIcon />
							<span>Fast Wifi</span>
						</li>
						<li>
							<MugIcon />
							<span>Coffee</span>
						</li>
						<li>
							<UmbrellaIcon />
							<span>Safe</span>
						</li>
						<li>
							<ShowerIcon />
							<span>Bath</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};
