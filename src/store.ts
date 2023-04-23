import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './features/language/languageSlice';
import pagesReducer from './features/pages/pagesSlice';

export const store = configureStore({
	reducer: {
		languageReducer,
		pagesReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
