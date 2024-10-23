import { useDispatch } from 'react-redux'
import { Button } from "@/shared/ui/button"
import { type User, add, selectUserById } from "@/entities/user/model"
import { useAppSelector } from '@/shared/lib'

export function AddUser({ user }: { user: User }) {
	const dispatch = useDispatch()
	const userInStore = useAppSelector(state => selectUserById(state, user.id))

	return (
		<Button onClick={() => dispatch(add(user))} disabled={Boolean(userInStore)}>
			Добавить
		</Button>
	)
}