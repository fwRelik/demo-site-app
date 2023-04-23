import { Form } from '@/components/Form/Form';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { AdminHeader } from '@/components/AdminHeader/AdminHeader';
import { APIUrls } from '@/configs/api.config';
import { IRoomPage } from '@/interfaces/RoomPage.interface';
import { DEFAULT_LIST, withAdminLayout } from '@/layout/AdminLayout/AdminLayout';
import Error404 from '@/pages/404';
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export function EditPage() {
	const [isNotFound, setIsNotFound] = useState<boolean>(false);
	const [pageData, setPageData] = useState<IRoomPage>();
	const { isReady, query } = useRouter();

	const id = !Array.isArray(query.id) && query.id ? query.id : '';
	const filteredValue = Object.assign(
		{},
		...Object.entries(pageData ?? {}).map(([key, value]) => {
			if (key !== '_id' && typeof value === 'string') return { [key]: value };
		})
	);

	const list = {
		name: 'Language pack',
		link: `${id}/language-pack`,
	};

	const saveHandler = async (data: Record<string, string>) => {
		if (!pageData) return;

		const newData = { ...pageData, ...data };
		setPageData(newData);

		try {
			axios.patch(APIUrls.ByIdRoomPages(id), newData);
		} catch (ex) {
			console.error(ex);
		}
	};

	useEffect(() => {
		if (isReady) {
			axios
				.get<IRoomPage>(APIUrls.ByIdRoomPages(id))
				.then(({ data }) => {
					setPageData(data);
					setIsNotFound(false);
				})
				.catch(() => setIsNotFound(true));
		}
	}, [isReady]);

	return (
		<>
			<Head>
				<title>Page {pageData?.title} edit</title>
			</Head>

			<AdminHeader />
			<Sidebar list={[DEFAULT_LIST, list]} />

			{!isNotFound ? (
				<>
					<h1>Title: {pageData?.title}</h1>

					<Form fields={filteredValue} saveHandler={saveHandler} />
				</>
			) : (
				<Error404 />
			)}
		</>
	);
}

export default withAdminLayout(EditPage, { panel: false });
