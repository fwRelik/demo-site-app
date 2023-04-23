import { IMainPage } from './MainPage.interface';

export interface IRoomPage extends IMainPage {
	roomName: string;
	roomType: string;
	roomDescription?: string;
	roomImagePath?: string;
}
