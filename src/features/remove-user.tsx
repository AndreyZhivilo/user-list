import { useDispatch } from 'react-redux'
import { remove } from '@/entities/user/model'
import { Button } from "@/shared/ui/button"


export function RemoveUser({ userId }: { userId: number }) {
	const dispatch = useDispatch()
	return (
		<Button onClick={() => dispatch(remove(userId))}>
			Удалить
		</Button>
	)
}