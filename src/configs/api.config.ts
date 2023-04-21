const public_domain = process.env.NEXT_PUBLIC_DOMAIN;
const u = (val: string) => `${public_domain}/api${val}`; // unifying

export const APIUrls = {
	LanguagePackage: u('/lang'),
	AuthLogin: u('/auth/login'),
	AuthRegister: u('/auth/regiser'),
};
