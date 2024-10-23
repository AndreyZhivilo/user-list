import { useState } from "react";
import { User, update } from "@/entities/user/model";
import { UserForm } from "@/entities/user/ui";
import { useAppDispatch } from "@/shared/lib";
import { Button } from "@/shared/ui/button";
import { Modal } from "@/shared/ui/modal";


export function UpdateUser({ user }: { user: User }) {
	const [open, setOpen] = useState(false)
	const dispatch = useAppDispatch()

	const toggleOpen = () => setOpen(prev => !prev)
	const closeModal = () => setOpen(false)

	const { id, ...initialUserData } = user

	const onSubmit = (userData: Omit<User, 'id'>) => {
		dispatch(update({ ...userData, id }))
		closeModal()
	}

	return (
		<>
			<Button type="button" onClick={toggleOpen}>Редактировать</Button>
			<Modal title='Создать пользователя' onClose={closeModal} open={open}>
				<UserForm onSubmit={onSubmit} initial={initialUserData} btnText="Обновить" />
			</Modal>
		</>
	)
}