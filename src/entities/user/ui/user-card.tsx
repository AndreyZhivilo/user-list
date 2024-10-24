import { ReactNode } from "react"
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/shared/ui/card"


export function UserCard({
	name,
	login,
	email,
	addUser,
	removeUser,
	updateUser
}: {
	name: string,
	login: string,
	email: string,
	addUser?: ReactNode,
	removeUser?: ReactNode,
	updateUser?: ReactNode,
}) {
	return (
		<Card className="flex flex-col">
			<CardHeader>
				<CardTitle className="text-2xl">
					{name}
				</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col flex-grow">
				<div><span className="font-bold">Login</span> - {login}</div>
				<div><span className="font-bold">email</span> - {email}</div>
			</CardContent>
			<CardFooter className="justify-end gap-4 items-end">
				{addUser}
				{removeUser}
				{updateUser}
			</CardFooter>
		</Card>
	)
}