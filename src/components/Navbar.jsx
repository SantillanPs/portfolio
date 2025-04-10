import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-primary bg-opacity-90 backdrop-filter backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-accent text-2xl font-bold mono cursor-pointer"
        >
          SebDev
        </Link>
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="nav-link text-light hover:text-accent cursor-pointer"
          >
            About
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="nav-link text-light hover:text-accent cursor-pointer"
          >
            Experience
          </Link>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="nav-link text-light hover:text-accent cursor-pointer"
          >
            Work
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="nav-link text-light hover:text-accent cursor-pointer"
          >
            Contact
          </Link>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1ciSaVKEntX6wjVr-TFyF0Jc5Xk0ZysX-/view?usp=sharing"
            className="px-4 py-2 border border-accent text-accent rounded hover:bg-accent hover:bg-opacity-10 transition-all duration-300"
          >
            Resume
          </a>
        </div>
        <button
          className="md:hidden text-light"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-secondary p-4">
          <a href="#about" className="block py-2 text-light hover:text-accent">
            About
          </a>
          <a
            href="#experience"
            className="block py-2 text-light hover:text-accent"
          >
            Experience
          </a>
          <a href="#work" className="block py-2 text-light hover:text-accent">
            Work
          </a>
          <a
            href="#contact"
            className="block py-2 text-light hover:text-accent"
          >
            Contact
          </a>
          <a
            href="#"
            className="block px-4 py-2 border border-accent text-accent rounded hover:bg-accent hover:bg-opacity-10 transition-all duration-300 mt-2 w-max"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
