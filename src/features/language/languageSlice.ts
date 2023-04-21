import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { languagePack } from './languagePack';

export type LanguagePackType = typeof languagePack;
export type LanguageResourcesType = typeof languagePack.resources;
export type SelectedResourceType = keyof typeof languagePack.resources;
export type ResourceFieldsType = keyof typeof languagePack.resources.en.translation;

export type LanguageState = {
	languageResources: LanguageResourcesType;
	selectedResource: SelectedResourceType;
};

const initialState: LanguageState = {
	languageResources: languagePack.resources,
	selectedResource: 'en',
};

export const languageSlice = createSlice({
	name: 'language',
	initialState,
	reducers: {
		selectLanguage: (state, action: PayloadAction<SelectedResourceType>) => {
			state.selectedResource = action.payload;
		},
		updateLanguagePackage: (state, action: PayloadAction<LanguagePackType>) => {
			state.languageResources = action.payload.resources;
		},
	},
});

export const { selectLanguage, updateLanguagePackage } = languageSlice.actions;

export default languageSlice.reducer;
