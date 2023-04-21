import { withAdminLayout } from '@/layout/AdminLayout/AdminLayout';
import Head from 'next/head';

export function Admin() {
	return (
		<>
			<Head>
				<title>Admin</title>
			</Head>
		</>
	);
}

export default withAdminLayout(Admin);
