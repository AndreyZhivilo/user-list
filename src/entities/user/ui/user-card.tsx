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
}: {
	name: string,
	login: string,
	email: string,
	addUser?: ReactNode,
	removeUser?: ReactNode,
}) {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-2xl">
					{name}
				</CardTitle>
			</CardHeader>
			<CardContent>
				{login} - {email}
			</CardContent>
			<CardFooter className="justify-end">
				{addUser}
				{removeUser}
			</CardFooter>
		</Card>
	)
}