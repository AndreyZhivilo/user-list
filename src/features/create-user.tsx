import { nanoid } from 'nanoid'
import { useState } from 'react';
import { useAppDispatch } from "@/shared/lib";
import { UserForm } from "@/entities/user/ui";
import { add, User } from "@/entities/user/model";
import { Modal } from '@/shared/ui/modal'
import { RoundButton } from '@/shared/ui/round-button';

export function CreateUser({ className }: { className?: string }) {
	const [open, setOpen] = useState(false)
	const dispatch = useAppDispatch()

	const toggleOpen = () => setOpen(prev => !prev)
	const closeModal = () => setOpen(false)

	const onSubmit = (userData: Omit<User, 'id'>) => {
		dispatch(add({ ...userData, id: nanoid() }))
		closeModal()
	}

	return (
		<>
			<RoundButton className={className} onClick={toggleOpen} />
			<Modal title='Создать пользователя' onClose={closeModal} open={open}>
				<UserForm onSubmit={onSubmit} btnText='Создать' />
			</Modal>
		</>

	)
}