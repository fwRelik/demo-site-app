import { withAdminLayout } from '@/layout/AdminLayout/AdminLayout';
import Head from 'next/head';

export function Pages() {
	return (
		<>
			<Head>
				<title>Pages</title> 
			</Head> 
		</>
	);
}

export default withAdminLayout(Pages)