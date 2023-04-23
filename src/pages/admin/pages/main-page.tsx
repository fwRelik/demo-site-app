import { Form } from '@/components/Form/Form';
import { APIUrls } from '@/configs/api.config';
import { IRoomPage } from '@/interfaces/RoomPage.interface';
import { withAdminLayout } from '@/layout/AdminLayout/AdminLayout';
import Error404 from '@/pages/404';
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export function MainPageEdit() {
	const [isNotFound, setIsNotFound] = useState<boolean>(false);
	const [pageData, setPageData] = useState<IRoomPage>();
	const { isReady } = useRouter();

	const filteredValue = Object.assign(
		{},
		...Object.entries(pageData ?? {}).map(([key, value]) => {
			if (key !== '_id' && typeof value === 'string') return { [key]: value };
		})
	);

	const saveHandler = async (data: Record<string, string>) => {
		if (!pageData) return;

		const newData = { ...pageData, ...data };
		setPageData(newData);

		try {
			axios.patch(APIUrls.MainPage, newData);
		} catch (ex) {
			console.error(ex);
		}
	};

	useEffect(() => {
		if (isReady) {
			axios
				.get<IRoomPage>(APIUrls.MainPage)
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

export default withAdminLayout(MainPageEdit);
