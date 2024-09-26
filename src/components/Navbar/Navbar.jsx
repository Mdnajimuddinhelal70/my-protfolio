import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

  const navLinks = <>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/projects'>Projects</Link></li>
  <li><Link to='/'>About me</Link></li>
  </>
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Protfolio</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
           {navLinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
