import { useSelector } from "react-redux";
import { Layout } from "./layout";
import { selectUsers } from '@/entities/user/model'
import { UserCard } from "@/entities/user/ui/user-card";
import { RemoveUser } from "@/features/remove-user";
import { CardLayout } from "@/shared/ui/cards-layout";

export function UsersPage() {
	const users = useSelector(selectUsers)
	return (
		<Layout>
			<div className="container mx-auto">
				{users.length === 0
					? <div>Вы пока не добавили ни одного пользователя</div>
					: <CardLayout>{users.map(user => <UserCard
						name={user.name}
						login={user.username}
						email={user.email}
						removeUser={<RemoveUser userId={user.id} />}
					/>)}</CardLayout>
				}
			</div>
		</Layout>
	)
}