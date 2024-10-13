import { useState } from "react";
import logo from "../../assets/my-pic/myLogo2.webp";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar bg-black flex justify-between items-center px-6 py-4">
     
      <div>
        <img src={logo} alt="Logo" className="w-[50px] rounded-full" />
        <div className="ml-3 font-extrabold">
          <h3>Najim</h3>
          <p>najimuddinhelal96@gmail.com</p>
        </div>
      </div>

     
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

    
      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex space-x-4 absolute md:relative top-16 left-0 md:top-auto md:left-auto bg-black md:bg-transparent w-full md:w-auto p-4 md:p-0`}
      >
        <li>
          <AnchorLink href="#home">
            <p
              className="hover:text-fuchsia-600 text-xl text-white"
              onClick={toggleMenu}
            >
              Home
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink offset={50} href="#about">
            <p
              className="hover:text-fuchsia-600 text-xl text-white"
              onClick={toggleMenu}
            >
              About Me
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink offset={50} href="#services">
            <p
              className="hover:text-fuchsia-600 text-xl text-white"
              onClick={toggleMenu}
            >
              Services
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink offset={50} href="#work">
            <p
              className="hover:text-fuchsia-600 text-xl text-white"
              onClick={toggleMenu}
            >
              Projects
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink offset={50} href="#contact">
            <p
              className="hover:text-fuchsia-600 text-xl text-white"
              onClick={toggleMenu}
            >
              Contact Me
            </p>
          </AnchorLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
