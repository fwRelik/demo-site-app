import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface AdminHeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	userName?: string;
}
