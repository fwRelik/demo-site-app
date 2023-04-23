import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IPunct {
	name: string;
	link: string;
	action?: () => void;
}

export interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	list?: IPunct[];
}
