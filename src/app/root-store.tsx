import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { ReactNode } from 'react'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { userSlice, saveUsersToLocalStorage, loadInitialState } from '@/entities/user/model'
import { usersApi } from '@/entities/user/api'

export const store = configureStore({
	reducer: {
		users: userSlice.reducer,
		[usersApi.reducerPath]: usersApi.reducer
	},
	preloadedState: loadInitialState(),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().prepend(saveUsersToLocalStorage.middleware).concat(usersApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export function StoreProvider({ children }: { children: ReactNode }) {
	return (
		<Provider store={store}>
			{children}
		</Provider>
	)
}
