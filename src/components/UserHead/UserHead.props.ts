import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface UserHeadProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	userName?: string;
}
