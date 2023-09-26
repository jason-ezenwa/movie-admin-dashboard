import { NavLink, useLocation } from 'react-router-dom'
export default function Navbar() {
  const location = useLocation()
  return (
    <nav className='ml-[2%] mr-auto'>
      <ul>
        <NavLink
          className={location.pathname === '/' ? 'nav-link-active' : 'nav-link'}
          to='/'
          activeStyle
        >
          Overview
        </NavLink>
        <NavLink
          className={
            location.pathname === '/movies' ? 'nav-link-active' : 'nav-link'
          }
          to='/movies'
          activeStyle
        >
          Movies
        </NavLink>
        <NavLink
          className={
            location.pathname === '/users' ? 'nav-link-active' : 'nav-link'
          }
          to='/users'
          activeStyle
        >
          Users
        </NavLink>
      </ul>
    </nav>
  )
}
