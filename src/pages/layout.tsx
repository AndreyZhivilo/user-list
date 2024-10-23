import { ReactNode } from "react";
import { AppHeader } from "@/widgets/header";

export function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="h-full flex flex-col">
			<AppHeader />
			<main className="flex-grow">{children}</main>
		</div>
	)
}