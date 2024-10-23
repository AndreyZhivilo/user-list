import { Link } from "react-router-dom";
import { paths } from "@/shared/config";

export function AppHeader() {
	return (
		<header className="mb-5 bg-blue-700 py-5">
			<div className="container mx-auto flex items-center justify-between">
				<h1 className="text-4xl font-bold text-white">Userator</h1>
				<nav>
					<ul className="flex items-center gap-4 text-white text-lg font-semibold">
						<li><Link to={paths.HOME_PAGE}>Главная</Link></li>
						<li><Link to={`/${paths.USERS_PAGE}`}>Избранное</Link></li>
					</ul>
				</nav>
			</div>
		</header>
	)
}