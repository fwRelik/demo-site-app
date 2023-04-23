import { IPunct } from '@/components/Sidebar/Sidebar.props';
import { ReactNode } from 'react';

export interface AdminLayoutProps {
	children: ReactNode;
	options?: {
		list?: IPunct[];
		panel?: boolean;
	};
}
