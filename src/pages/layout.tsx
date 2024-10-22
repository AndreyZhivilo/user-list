import { ReactNode } from "react";
import { AppHeader } from "@/widgets/header";

export function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<AppHeader />
			<main>{children}</main>
		</>
	)
}