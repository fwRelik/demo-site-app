import { RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import { ResourceFieldsType, SelectedResourceType, selectLanguage } from '@/features/language/languageSlice';

export default function useLangaugePack() {
	const { languageResources, selectedResource } = useSelector((state: RootState) => state.languageReducer);
	const dispatch = useDispatch();
	const languagePackages = Object.keys(languageResources);

	const changeLanguage = (language: SelectedResourceType) => {
		if (!languagePackages.some(i => i === language))
			return console.error(`Selected value is invalid! {${language}}`);
		dispatch(selectLanguage(language));
	};

	const t = (key: ResourceFieldsType): string => {
		return languageResources[selectedResource].translation[key];
	};

	return {
		t,
		changeLanguage,
		selectedResource,
		languagePackages,
	};
}
