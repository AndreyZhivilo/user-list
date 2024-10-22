import { useSelector, useDispatch } from 'react-redux'
import { Button } from '@/shared/ui/button'
import { add, selectUsers } from '@/entities/user/model'
import { useGetUsersQuery } from '@/entities/user/api'


function App() {
	const users = useSelector(selectUsers)
	const dispatch = useDispatch()
	const { isLoading, data } = useGetUsersQuery()


	const addTestUser = () => {
		dispatch(add({ id: 2, name: 'Petya', username: 'petya', email: 'pete@mail.ru' }))
	}
	return (
		<div className='container'>
			<div>
				{isLoading ? 'Loading...' : JSON.stringify(data)}
			</div>
			{users.map(user => (
				<span>{JSON.stringify(user)}</span>
			))}
			<Button onClick={addTestUser}>sadfasdf</Button>
		</div>
	)
}

export default App
