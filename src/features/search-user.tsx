import { useDispatch } from 'react-redux'
import { Input } from "@/shared/ui/input";
import { setSearch, selectSearchString } from '@/entities/user/model'
import { useAppSelector } from '@/shared/lib';

export function SearchUser() {
	const dispatch = useDispatch()
	const search = useAppSelector(selectSearchString)
	return (
		<Input className='mb-5' value={search} onChange={(e) => dispatch(setSearch(e.target.value))} />
	)
}