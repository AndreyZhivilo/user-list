import { ReactNode } from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/shared/ui/dialog"

export function Modal({
	title,
	open = false,
	onClose,
	children,

}: {
	title: string,
	open: boolean,
	onClose: () => void,
	children: ReactNode,

}) {
	return (
		<Dialog open={open} onOpenChange={onClose}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
				</DialogHeader>
				{children}
			</DialogContent>
		</Dialog>

	)
}