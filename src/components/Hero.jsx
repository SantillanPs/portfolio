import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { Link } from "react-scroll";

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("Santillanbasti@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <section
      className="min-h-screen flex items-center px-6 pt-20 relative"
      id="home"
    >
      {/* Background blobs */}
      <div className="blob bg-accent w-64 h-64 top-1/4 left-1/4"></div>
      <div className="blob bg-gold w-96 h-96 bottom-1/4 right-1/4"></div>
      {/* <div className="blob bg-accent w-64 h-64 bottom-4 left-1/4"></div> */}

      {copied && (
        <div className="fixed top-20 right-8 bg-secondary border border-accent text-accent px-4 py-2 rounded-md shadow-lg flex items-center space-x-2 z-50 animate-fade">
          <FontAwesomeIcon icon={faCheck} />
          <span>Email copied to clipboard!</span>
        </div>
      )}

      {/* Social links sidebar (left) */}
      <div className="hidden md:flex flex-col fixed left-8 bottom-0 space-y-6 items-center">
        <div className="flex flex-col space-y-6">
          <a
            href="https://github.com/SantillanPs"
            className="text-light hover:text-accent text-xl transition-all hover:-translate-y-1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="#"
            className="text-light hover:text-accent text-xl transition-all hover:-translate-y-1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            href="#"
            className="text-light hover:text-accent text-xl transition-all hover:-translate-y-1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="#"
            className="text-light hover:text-accent text-xl transition-all hover:-translate-y-1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className="h-24 w-px bg-light opacity-30"></div>
      </div>

      {/* Email link sidebar (right) */}
      <div className="hidden md:flex flex-col fixed right-8 bottom-0 items-center">
        <button
          href="mailto:hello@alexcarter.dev"
          onClick={handleCopyEmail}
          className="text-light hover:text-accent mono text-sm vertical-rl mb-6 hover:-translate-y-1 transition-all"
          style={{ writingMode: "vertical-rl" }}
        >
          Santillanbasti@gmail.com
        </button>

        <div className="h-24 w-px bg-light opacity-30"></div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto relative">
        <p className="text-accent mono mb-4">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-light hero-title mb-4">
          Sebastian Santillan.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-light opacity-70 mb-6">
          I build things for the web.
        </h2>
        <p className="max-w-lg text-light opacity-90 mb-8">
          I'm a full-stack developer specializing in building exceptional
          digital experiences. Currently focused on creating accessible,
          human-centered products at
          <span className="text-accent"> TechSolutions Inc.</span>
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="px-6 py-3 border cursor-pointer border-accent text-accent rounded hover:bg-accent hover:bg-opacity-10 transition-all duration-300 mono text-center"
          >
            Check out my work
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="px-6 py-3 border cursor-pointer border-light text-light rounded hover:bg-light hover:bg-opacity-10 transition-all duration-300 mono text-center"
          >
            Contact
          </Link>
        </div>

        {/* Scroll down indicator */}
      </div>
    </section>
  );
};

export default Hero;
