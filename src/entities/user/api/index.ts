import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react'
import type {User} from '../model'

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => import.meta.env.VITE_USERS_ENDPOINT,
    }),
  }),
})

export const { useGetUsersQuery } = usersApi

