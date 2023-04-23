import { RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import { ResourceFieldsType, SelectedResourceType, selectLanguage } from '@/features/language/languageSlice';

export default function useLangaugePack() {
	const { selectedResource } = useSelector((state: RootState) => state.languageReducer);
	const {
		languagePack: { resources },
	} = useSelector((state: RootState) => state.pagesReducer);

	const dispatch = useDispatch();
	const languagePackages = Object.keys(resources);

	const changeLanguage = (language: SelectedResourceType) => {
		if (!languagePackages.some(i => i === language))
			return console.error(`Selected value is invalid! {${language}}`);
		dispatch(selectLanguage(language));
	};

	const t = (key: ResourceFieldsType): string => {
		return resources[selectedResource]?.translation[key];
	};

	return {
		t,
		changeLanguage,
		selectedResource,
		languagePackages,
	};
}
