import { useGetUsersQuery } from '@/entities/user/api'
import { UserCard } from '@/entities/user/ui/user-card'
import { Layout } from './layout'
import { AddUser } from '@/features/add-user'


export function HomePage() {
	const { isLoading, data } = useGetUsersQuery()
	if (isLoading) return 'Loading...'

	return (
		<Layout>
			<div className="container mx-auto">
				<div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					{data?.map(user => (
						<UserCard
							key={user.id}
							name={user.name}
							login={user.username}
							email={user.email}
							addUser={<AddUser user={user} />}
						/>
					))}
				</div>
			</div>
		</Layout>

	)
}