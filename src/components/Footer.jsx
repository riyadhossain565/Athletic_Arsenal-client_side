import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
      <div className="w-11/12 mx-auto px-8 py-4">
        {/* Footer Content */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Website Name */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold text-white">Athletic Arsenal</h1>
            <p className="text-sm mt-1">
              Your ultimate destination for sports equipment.
            </p>
          </div>

          {/* Contact Info */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h2>
            <div className="flex gap-4 items-center mb-4">
              <FaPhoneAlt />
              <p>+88 01533 333 333</p>
            </div>
            <div className="flex gap-4 items-center mb-4">
              <MdEmail />
              <p>info@gmail.com</p>
            </div>
            <div className="flex gap-4 items-center mb-4">
              <FaLocationDot />
              <p>72, Wall street, King Road, Dhaka</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mb-4 md:mb-0">
            <h6 className="text-lg font-semibold text-white mb-2">Social</h6>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} SportsGear. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
