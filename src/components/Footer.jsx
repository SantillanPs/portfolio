import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-secondary border-opacity-30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-light opacity-70 text-sm mono">
              Built with ❤️ by Sebastian Santillan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
