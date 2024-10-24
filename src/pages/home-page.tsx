import { useEffect } from 'react'
import { useGetUsersQuery } from '@/entities/user/api'
import { UserCard } from '@/entities/user/ui'
import { Layout } from './layout'
import { AddUser } from '@/features/add-user'
import { CardLayout } from '@/shared/ui/cards-layout'
import { useToast } from "@/shared/lib"



export function HomePage() {
	const { isLoading, data, error } = useGetUsersQuery()
	const { toast } = useToast()

	useEffect(() => {
		if (error) {
			toast({
				title: "Произошла ошибка",
				description: "Наши специалисты уже работают над этим",
				variant: 'destructive'
			})
		}
	}, [error, toast])

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