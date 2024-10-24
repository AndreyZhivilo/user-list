import { Link } from "react-router-dom";
import { HamburgerMenuIcon as Menu } from '@radix-ui/react-icons';
import { paths } from "@/shared/config";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from "@/shared/ui/sheet"
import { Button } from "@/shared/ui/button";

export function AppHeader() {
	return (
		<header className="mb-5 bg-blue-700 py-5">
			<div className="container mx-auto flex items-center justify-between">
				<h1 className="text-4xl font-bold text-white"><Link to={paths.HOME_PAGE}>Userator</Link></h1>
				<Sheet >
					<SheetTrigger asChild>
						<Button variant="ghost" size="icon" className="md:hidden">
							<Menu className="h-7 w-7 text-white" />
						</Button>
					</SheetTrigger>
					<SheetContent side="right">
						<SheetHeader className=" border-b pb-5 mb-5">Userator</SheetHeader>
						<ul className="flex flex-col gap-4 text-lg font-semibold">
							<li><Link to={paths.HOME_PAGE}>Главная</Link></li>
							<li><Link to={`/${paths.USERS_PAGE}`}>Избранное</Link></li>
						</ul>
					</SheetContent>
				</Sheet>
				<nav className="hidden md:block">
					<ul className="flex items-center gap-4 text-white text-lg font-semibold">
						<li><Link to={paths.HOME_PAGE}>Главная</Link></li>
						<li><Link to={`/${paths.USERS_PAGE}`}>Избранное</Link></li>
					</ul>
				</nav>
			</div>
		</header>
	)
}