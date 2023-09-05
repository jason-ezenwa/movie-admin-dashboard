import { NavLink, useLocation } from "react-router-dom";
export default function MoviesNavbar() {
  const location = useLocation();
	return (
		<nav className="movies-nav">
			<ul>
				<NavLink className={location.pathname === "/movies" ? "movies-nav-link-active" : "movies-nav-link"} to="/movies" activeStyle>
          Movies
				</NavLink>
				<NavLink className={location.pathname === "/trending-movies" ? "movies-nav-link-active" : "movies-nav-link"} to="/trending-movies" activeStyle>
					Trending Movies
				</NavLink>
				<NavLink className={location.pathname === "/upcoming-premiers" ? "movies-nav-link-active" : "movies-nav-link"} to="/upcoming-premiers" activeStyle>
					Upcoming Premiers
				</NavLink>
        <NavLink className={location.pathname === "/movie-of-the-week" ? "movies-nav-link-active" : "movies-nav-link"} to="/movie-of-the-week" activeStyle>
					Movie of the Week
				</NavLink>
			</ul>
		</nav>
	);
};