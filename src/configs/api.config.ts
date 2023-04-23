const public_domain = process.env.NEXT_PUBLIC_DOMAIN;
const u = (val: string) => `${public_domain}/api${val}`; // unifying

export const APIUrls = {
	AuthLogin: u('/auth/login'),
	AuthRegister: u('/auth/regiser'),
	MainPage: u('/page/main'),
	RoomPages: u('/page/room'),
	ByIdRoomPages: (id: string) => u(`/page/room/${id}`),
};
