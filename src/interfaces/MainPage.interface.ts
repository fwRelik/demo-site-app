export interface IMainPage {
	_id: string;
	title: string;
	description: string;
	removable: boolean;
	languagePack: ILanguagePack;
}

export interface ILanguagePack {
	resources: Record<string, ITranslation>;
}

export interface ITranslation {
	translation: Record<string, string>;
}
