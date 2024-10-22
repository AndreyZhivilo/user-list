import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { User } from './types'

interface UserStore {
	users: User[]
	favoriteUsers: number[]
}

const initialState: UserStore = {
	users: [
		{
		id: 1,
		name: 'Vasya',
		username: 'vasili45',
		email: 'vasya@mail.ru'
	}
],
	favoriteUsers: []
}


export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
		add: (state, action: PayloadAction<User>) => {
			state.users.push(action.payload)
		},
    update: (state, action: PayloadAction<User>) => {
      state.users = state.users.map(user => {
				if(user.id === action.payload.id) {
					return action.payload
				} 
					return user
				
			})
    },
		remove: (state, action: PayloadAction<number>) => {
			state.users = state.users.filter(user => user.id !== action.payload)
		}
  },
	selectors: {
		selectUsers: (userStore: UserStore) => userStore.users
	}
})



export const { add, remove, update } = userSlice.actions
export const { selectUsers } = userSlice.selectors


