import { ILanguagePack, IMainPage } from '@/interfaces/MainPage.interface';
import { IRoomPage } from '@/interfaces/RoomPage.interface';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type PagesType = {
	mainPage: Omit<IMainPage, '_id'>;
	roomPages: IRoomPage[];
	languagePack: ILanguagePack;
};

const initialState: PagesType = {
	mainPage: {
		title: 'Main Page Title',
		description: 'Description!',
		removable: false,
		languagePack: { resources: {} },
	},
	roomPages: [],
	languagePack: { resources: {} },
};

export const pagesSlice = createSlice({
	name: 'pages',
	initialState,
	reducers: {
		createMainPage: (state, action: PayloadAction<IMainPage>) => {
			state.mainPage = action.payload;
			state.languagePack = action.payload.languagePack;
		},
		addRoomPages: (state, action: PayloadAction<IRoomPage[]>) => {
			state.roomPages = action.payload;
		},
		addCurrentPageLang: (state, action: PayloadAction<ILanguagePack>) => {
			state.languagePack = action.payload;
		},
	},
});

export const { createMainPage, addRoomPages, addCurrentPageLang } = pagesSlice.actions;

export default pagesSlice.reducer;
