import { IMainPage } from '@/interfaces/MainPage.interface';
import { IRoomPage } from '@/interfaces/RoomPage.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PageCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	pages?: (IMainPage & IRoomPage)[];
}
