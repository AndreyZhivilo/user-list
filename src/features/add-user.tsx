import { useDispatch, useSelector } from 'react-redux'
import { Button } from "@/shared/ui/button"
import { type User, add, selectUserById } from "@/entities/user/model"

export function AddUser({ user }: { user: User }) {
	const dispatch = useDispatch()
	const userInStore = useSelector(state => selectUserById(state, user.id))

	return (
		<Button onClick={() => dispatch(add(user))} disabled={Boolean(userInStore)}>
			Добавить
		</Button>
	)
}