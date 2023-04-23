import { AdminHeader } from '@/components/AdminHeader/AdminHeader';
import { EditableTable } from '@/components/EditableTable/EditableTable';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { APIUrls } from '@/configs/api.config';
import { ILanguagePack } from '@/interfaces/MainPage.interface';
import { IRoomPage } from '@/interfaces/RoomPage.interface';
import { DEFAULT_LIST, withAdminLayout } from '@/layout/AdminLayout/AdminLayout';
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export function LanguagePage() {
	const [pageData, setPageData] = useState<IRoomPage>();
	const { isReady, query } = useRouter();
	const id = !Array.isArray(query.id) && query.id ? query.id : '';

	const list = {
		name: 'Edit fields',
		link: `./`,
	};

	const saveHandler = async (data: ILanguagePack) => {
		if (!pageData) return;

		const newData = { ...pageData, languagePack: data };
		setPageData(newData);

		try {
			axios.patch(APIUrls.ByIdRoomPages(id), newData);
		} catch (ex) {
			console.error(ex);
		}
	};

	useEffect(() => {
		if (isReady) {
			try {
				axios.get<IRoomPage>(APIUrls.ByIdRoomPages(id)).then(({ data }) => setPageData(data));
			} catch (ex) {
				console.error(ex);
			}
		}
	}, [isReady]);

	return (
		<>
			<Head>
				<title>Language pack</title>
			</Head>

			<AdminHeader />
			<Sidebar list={[DEFAULT_LIST, list]} />

			<h1>Language pack</h1>
			<EditableTable fields={pageData?.languagePack} saveHandler={saveHandler} />
		</>
	);
}

export default withAdminLayout(LanguagePage, { panel: false });
