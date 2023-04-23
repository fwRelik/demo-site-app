import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface FormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	fields: Record<string, string>;
	saveHandler: (data: Record<string, string>) => void;
}
