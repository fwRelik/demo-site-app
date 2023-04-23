import { Button } from '@/components/Button/Button';
import { PageCard } from '@/components/PageCard/PageCard';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { AdminHeader } from '@/components/AdminHeader/AdminHeader';
import { APIUrls } from '@/configs/api.config';
import { IMainPage } from '@/interfaces/MainPage.interface';
import { IRoomPage } from '@/interfaces/RoomPage.interface';
import { DEFAULT_LIST, withAdminLayout } from '@/layout/AdminLayout/AdminLayout';
import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export function Pages() {
	const [pagesData, setPagesData] = useState<(IMainPage & IRoomPage)[]>([]);
	const [pageIsCreated, setPageIsCreated] = useState<boolean>(false);
	const pageInitialValue = {
		title: 'Page Title',
		description: 'Page Description',
		removable: true,
		roomName: 'Room Name',
		roomType: 'type_1',
		roomDescription: 'Room Description',
		roomImagePath: '/images/room1.jpg',
		languagePack: {
			resources: {
				en: {
					translation: {
						header_home: 'Home',
						header_about: 'About',
						header_rooms_suites: 'Rooms & Suites',
						header_facilities: 'Facilities',
						header_offers: 'Offers',
						header_contact: 'Contact',
						header_button_text: 'Get a Quote',
						welcome_pre_title: 'This is Luxury Hotel',
						welcome_title: 'Superior Hotel in World',
						welcome_description:
							'A wonderful serenity has taken possession of my entrie soul, like these sweet mornings of spring which I enjoy with my whole heart.',
						welcome_button_text: 'Rooms & Suites',
					},
				},
				ru: {
					translation: {
						header_home: 'Дом',
						header_about: 'О',
						header_rooms_suites: 'Номера и люксы',
						header_facilities: 'Удобства',
						header_offers: 'Предложения',
						header_contact: 'Контакт',
						header_button_text: 'Получить предложение',
						welcome_pre_title: 'Это роскошный отель',
						welcome_title: 'Улучшенный отель в мире',
						welcome_description:
							'Чудесная безмятежность овладела моей преддверной душой, как эти сладостные весенние утра, которыми я наслаждаюсь всем сердцем.',
						welcome_button_text: 'Номера и люксы',
					},
				},
				tr: {
					translation: {
						header_home: 'Ev',
						header_about: 'Hakkında',
						header_rooms_suites: 'Odalar ve Süitler',
						header_facilities: 'Tesisler',
						header_offers: 'Teklifler',
						header_contact: 'Temas etmek',
						header_button_text: 'Teklif Alın',
						welcome_pre_title: 'Burası Lüks Otel',
						welcome_title: 'Dünyada Üstün Otel',
						welcome_description:
							'Tüm kalbimle tadını çıkardığım bu tatlı bahar sabahları gibi harika bir dinginlik tüm ruhumu ele geçirdi.',
						welcome_button_text: 'Odalar ve Süitler',
					},
				},
			},
		},
	};

	const createPage = () => {
		try {
			axios.post(APIUrls.RoomPages, pageInitialValue);
			setPageIsCreated(!pageIsCreated);
		} catch (ex) {
			console.error(ex);
		}
	};

	const list = {
		name: 'Create Page',
		link: '',
		action: createPage,
	};

	useEffect(() => {
		(async () => {
			const { data: mainPage } = await axios.get<IMainPage>(APIUrls.MainPage);
			const { data: roomPage } = await axios.get<IRoomPage[]>(APIUrls.RoomPages);

			// Need fix this!
			setPagesData([mainPage as IRoomPage, ...roomPage]);
		})();
	}, [pageIsCreated]);

	return (
		<>
			<Head>
				<title>Pages</title>
			</Head>

			<AdminHeader userName={'Admin'} />
			<Sidebar list={[DEFAULT_LIST, list]} />

			<PageCard pages={pagesData} />
		</>
	);
}

export default withAdminLayout(Pages, { panel: false });
