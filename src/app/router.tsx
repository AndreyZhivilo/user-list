import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import { HomePage } from '@/pages/home-page'
import { paths } from '@/shared/config'
import { UsersPage } from "@/pages/user-page";


export const router = createBrowserRouter([
	{
		path: paths.HOME_PAGE,
		element: <HomePage />,
	},
	{
		path: paths.USERS_PAGE,
		element: <UsersPage />
	}
]);

export function Routes() {
	return <RouterProvider router={router} />
}