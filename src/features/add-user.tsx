import { useDispatch } from 'react-redux'
import { Button } from "@/shared/ui/button"
import { type User, add } from "@/entities/user/model"

export function AddUser({ user }: { user: User }) {
	const dispatch = useDispatch()
	return (
		<Button onClick={() => dispatch(add(user))}>
			Добавить
		</Button>
	)
}