import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      Header
      <nav>
        <NavLink to="/" className="nav__link">
          Home
        </NavLink>
        <NavLink to="/ministries" className="nav__link">
          ministries
        </NavLink>
        <NavLink to="/sermons" className="nav__link">
          sermons
        </NavLink>
        <NavLink to="/events" className="nav__link">
          events
        </NavLink>
        <NavLink to="/blogs" className="nav__link">
          blogs
        </NavLink>
        <NavLink to="/contact" className="nav__link">
          contact
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
