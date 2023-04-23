import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const enum IconState {
	Warning = 'Warning',
	Error = 'Error',
	Success = 'Success',
	Information = 'Information',
}

export type INotificationWithoutID = Omit<INotification, '_id' | 'hide'>;

export interface INotification {
	_id: number;
	icon: IconState;
	head: string;
	message: string;
	hide: boolean;
	timeout: number;
	timeoutId?: NodeJS.Timeout;
}

export type NotificationState = {
	notifies: INotification[];
};

const initialState: NotificationState = {
	notifies: [],
};

export const notificationSlice = createSlice({
	name: 'notification',
	initialState,
	reducers: {
		push: (state, action: PayloadAction<INotification>) => {
			state.notifies.push(action.payload);
		},
		hide: (state, action: PayloadAction<number>) => {
			state.notifies = state.notifies.map(notify => {
				if (notify._id === action.payload) notify.hide = true;
				return notify;
			});
		},
		remove: (state, action: PayloadAction<number>) => {
			state.notifies = state.notifies.filter(item => item._id !== action.payload);
		},
		update: (state, action: PayloadAction<Pick<INotification, '_id' | 'timeoutId'>>) => {
			state.notifies = state.notifies.map(notify => {
				if (notify._id === action.payload._id) notify.timeoutId = action.payload.timeoutId;
				return notify;
			});
		},
	},
});

export const { push, hide, remove, update } = notificationSlice.actions;

export default notificationSlice.reducer;
