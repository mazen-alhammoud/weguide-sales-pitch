import { NavLink } from 'react-router-dom';
import logo from '../../assets/weguide_logo.svg';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="navbar-logo">
          <img src={logo} alt="WeGuide" />
        </NavLink>
      </div>
    </nav>
  );
}
