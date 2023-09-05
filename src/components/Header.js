import Navbar from "./Navbar"

export default function Header() {
	return (
		<header className='header' >
			<h2 className="header-text" >flairbox <span>Admin</span></h2>
			<Navbar/>
		</header>
	);
};