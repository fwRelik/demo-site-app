import { Button } from '@/components/Button/Button';
import { PageCard } from '@/components/PageCard/PageCard';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { UserHead } from '@/components/UserHead/UserHead';
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
		roomImagePath: '/public/images/room1.jpg',
		languagePack: {},
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

			<UserHead userName={'Admin'} />
			<Sidebar list={[DEFAULT_LIST, list]} />

			<PageCard pages={pagesData} />
		</>
	);
}

export default withAdminLayout(Pages, { panel: false });
