import { useSelector } from "react-redux";
import { Layout } from "./layout";
import { selectUsersBySearch } from '@/entities/user/model'
import { UserCard } from "@/entities/user/ui/user-card";
import { RemoveUser } from "@/features/remove-user";
import { CardLayout } from "@/shared/ui/cards-layout";
import { SearchUser } from "@/features/search-user";

export function UsersPage() {
	const users = useSelector(selectUsersBySearch)
	return (
		<Layout>
			<div className="container mx-auto">
				<SearchUser />
				{users.length === 0
					? <div>Не нашли ни одного пользователя</div>
					: <CardLayout>
						{users.map(user => <UserCard
							key={user.id}
							name={user.name}
							login={user.username}
							email={user.email}
							removeUser={<RemoveUser userId={user.id} />}
						/>)}
					</CardLayout>
				}
			</div>
		</Layout>
	)
}