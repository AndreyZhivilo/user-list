import { createSlice, createSelector } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { User } from './types'

interface UserStore {
	users: User[]
	searchString: string
}

const initialState: UserStore = {
	users: [],
	searchString: ''
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
		remove: (state, action: PayloadAction<number | string>) => {
			state.users = state.users.filter(user => user.id !== action.payload)
		},
		setSearch: (state, action: PayloadAction<string>) => {
			state.searchString = action.payload
		}
  },
	selectors: {
		selectUsers: (state: UserStore) => state.users,
		selectUserById: createSelector(
			[
				(state: UserStore) => state.users,
				(_state: UserStore, userId: number) => userId 
			],
			(users, userId) => users.find(user => user.id === userId)
			
		),
		selectUsersBySearch: createSelector(
			[
				(state: UserStore) => state.users,
				(state: UserStore) => state.searchString
			],
			(users, searchString) => {
				if(!searchString) return users				
				return users.filter(user => user.name.toLocaleLowerCase().includes(searchString.toLocaleLowerCase()))
			}
		),
		selectSearchString: (state: UserStore) => state.searchString
	}
})


export const { add, remove, update, setSearch } = userSlice.actions
export const { selectUsers, selectUserById, selectUsersBySearch, selectSearchString} = userSlice.selectors


