import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#FFFDF7] dark:bg-[#1F1F1F] border-t border-gray-200 dark:border-gray-700 shadow-inner">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* ABOUT */}
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            CareerCode
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Helping job seekers find their dream jobs. Join millions using our
            platform every month.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Quick Links
          </h3>
          <ul className="text-gray-600 dark:text-gray-400 space-y-2">
            <li className="hover:text-[#2D6CF4] cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-[#2D6CF4] cursor-pointer transition">
              Jobs
            </li>
            <li className="hover:text-[#2D6CF4] cursor-pointer transition">
              Companies
            </li>
            <li className="hover:text-[#2D6CF4] cursor-pointer transition">
              About
            </li>
            <li className="hover:text-[#2D6CF4] cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Resources
          </h3>
          <ul className="text-gray-600 dark:text-gray-400 space-y-2">
            <li className="hover:text-[#2D6CF4] cursor-pointer transition">
              Blog
            </li>
            <li className="hover:text-[#2D6CF4] cursor-pointer transition">
              Support
            </li>
            <li className="hover:text-[#2D6CF4] cursor-pointer transition">
              Privacy Policy
            </li>
            <li className="hover:text-[#2D6CF4] cursor-pointer transition">
              Terms & Conditions
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Follow Us
          </h3>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-[#2D6CF4] transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-[#2D6CF4] transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-[#2D6CF4] transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-[#2D6CF4] transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="w-full border-t border-gray-200 dark:border-gray-700 mt-8 py-4">
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} CareerCode. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
