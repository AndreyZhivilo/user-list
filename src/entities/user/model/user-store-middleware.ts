import type {  TypedStartListening } from '@reduxjs/toolkit'
import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'
import {LOCAL_STORAGE_KEY} from '@/shared/config'
import {add, remove, update} from './user-store'
import type {RootState} from '@/app/root-store'
import type {User} from './types'

export const saveUsersToLocalStorage = createListenerMiddleware()

type AppStartListening = TypedStartListening<RootState>

const startAppListening =
  saveUsersToLocalStorage.startListening as AppStartListening

const loadUsersFromStorage = (): User[] => {
  try {
    const serializedUsers = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (serializedUsers) {
      return JSON.parse(serializedUsers)
    }
  } catch (err) {
    console.error('Error loading users from localStorage:', err)
		localStorage.setItem(LOCAL_STORAGE_KEY, '')
  }
  return []
}

startAppListening({
  matcher: isAnyOf(add, update, remove),
  effect: (_action, listenerApi) => {
    const state = listenerApi.getState() as RootState
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.users.users))
  }
})

export const loadInitialState = () => {
  const users = loadUsersFromStorage()
  return {
    users: {
      users,
      searchString: ''
    }
  }
}