import { APIUrls } from '@/configs/api.config';
import { withMainPageLayout } from '@/layout/MainPageLayout/MainPageLayout';
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IRoomPage } from '@/interfaces/RoomPage.interface';
import { Welcome } from '@/components/Sections/Welcome/Welcome';
import { addCurrentPageLang } from '@/features/pages/pagesSlice';
import { useDispatch } from 'react-redux';

export function RoomPage() {
	const [page, setPage] = useState<IRoomPage>();
	const { isReady, query } = useRouter();
	const id = !Array.isArray(query.id) && query.id ? query.id : '';

	const dispatch = useDispatch();

	useEffect(() => {
		if (id) {
			axios.get<IRoomPage>(APIUrls.ByIdRoomPages(id)).then(({ data }) => {
				setPage(data);
				dispatch(addCurrentPageLang(data.languagePack));
			});
		}
	}, [isReady]);

	return (
		<>
			<Head>
				<title>{page?.title}</title>
				<meta name='description' content={page?.description} />
			</Head>

			<main>
				{page ? (
					<>
						<Welcome />
					</>
				) : (
					<></>
				)}
			</main>
		</>
	);
}

export default withMainPageLayout(RoomPage);
