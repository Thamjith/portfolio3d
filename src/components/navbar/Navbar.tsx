import './Navbar.scss';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/">Home</NavLink>
      <nav className="nav">
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
