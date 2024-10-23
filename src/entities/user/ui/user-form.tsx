import { z } from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from '@/shared/ui/button'
import { User } from '../model'
import { UserFormInput } from './user-form-input'


interface UserFormProps {
	onSubmit: (user: Omit<User, 'id'>) => void;
	btnText: string;
	initial?: Omit<User, 'id'>;
}


export function UserForm({ onSubmit, initial, btnText }: UserFormProps) {

	const schema = z.object({
		name: z.string({ required_error: 'Вы забыли указать имя' }),
		username: z.string({ required_error: 'Вы забыли указать логин' }),
		email: z.string().email({ message: 'Неправильный email' })
	})

	type UserForm = z.infer<typeof schema>

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<UserForm>({ resolver: zodResolver(schema), defaultValues: initial })



	return (
		<form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
			<UserFormInput error={errors.name?.message} name='name' label='Имя' register={register('name')} />
			<UserFormInput error={errors.username?.message} name='username' label='Логин' register={register('username')} />
			<UserFormInput error={errors.email?.message} name='email' label='Email' register={register('email')} />
			<Button type="submit">{btnText}</Button>
		</form>
	)
}