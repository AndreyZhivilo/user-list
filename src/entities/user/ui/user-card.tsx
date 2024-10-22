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
}: {
	name: string,
	login: string,
	email: string,
	addUser?: ReactNode,
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
			<CardFooter>
				{addUser}
			</CardFooter>
		</Card>
	)
}