import { useDispatch, useSelector } from 'react-redux'
import { Input } from "@/shared/ui/input";
import { setSearch, selectSearchString } from '@/entities/user/model'

export function SearchUser() {
	const dispatch = useDispatch()
	const search = useSelector(selectSearchString)
	return (
		<Input className='mb-5' value={search} onChange={(e) => dispatch(setSearch(e.target.value))} />
	)
}