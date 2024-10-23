import type { UseFormRegisterReturn } from "react-hook-form"
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";

export function UserFormInput({
	name,
	label,
	placeholder,
	error,
	register,
}: {
	name: string,
	label: string,
	placeholder?: string,
	error: string | undefined,
	register: UseFormRegisterReturn<any>
}) {
	return (
		<div className="grid gap-2 relative">
			<Label htmlFor={name}>{label}</Label>
			<Input error={Boolean(error)} id={name} placeholder={placeholder} {...register} />
			{error && <span className="absolute top-0 right-0 text-red-400 text-sm">{error}</span>}
		</div>
	)
}