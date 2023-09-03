import { NavLink } from "react-router-dom";
export default function Navbar() {
	return (
		<nav>
			<ul>
				<NavLink className="nav-link" to="/" activeStyle>
					Overview
				</NavLink>
				<NavLink className="nav-link" to="/movies" activeStyle>
					Movies
				</NavLink>
				<NavLink className="nav-link" to="/users" activeStyle>
					Users
				</NavLink>
			</ul>
		</nav>
	);
};