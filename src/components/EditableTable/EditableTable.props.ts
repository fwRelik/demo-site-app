import { ILanguagePack } from '@/interfaces/MainPage.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface EditableTableProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	fields: ILanguagePack | undefined;
	saveHandler: (data: ILanguagePack) => void;
}
