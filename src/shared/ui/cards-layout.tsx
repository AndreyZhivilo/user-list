import { ReactNode } from "react";

export function CardLayout({ children }: { children: ReactNode }) {
	return (
		<div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>{children}</div>
	)
}