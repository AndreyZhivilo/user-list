import { useGetUsersQuery } from '@/entities/user/api'
import { UserCard } from '@/entities/user/ui/user-card'
import { Layout } from './layout'
import { AddUser } from '@/features/add-user'
import { CardLayout } from '@/shared/ui/cards-layout'


export function HomePage() {
	const { isLoading, data } = useGetUsersQuery()
	if (isLoading) return 'Loading...'

	return (
		<Layout>
			<div className="container mx-auto">
				<CardLayout>
					{data?.map(user => (
						<UserCard
							key={user.id}
							name={user.name}
							login={user.username}
							email={user.email}
							addUser={<AddUser user={user} />}
						/>
					))}
				</CardLayout>
			</div>
		</Layout>

	)
}