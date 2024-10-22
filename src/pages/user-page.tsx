import { useSelector } from "react-redux";
import { Layout } from "./layout";
import { selectUsers } from '@/entities/user/model'

export function UsersPage() {
	const users = useSelector(selectUsers)
	return (
		<Layout>
			<div className="container">
				{users.length === 0
					? <div>Вы пока не добавили ни одного пользователя</div>
					: <div>{users.map(user => <>{JSON.stringify(user)}</>)}</div>
				}
			</div>
		</Layout>
	)
}