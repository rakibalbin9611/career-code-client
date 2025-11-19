import { FiSearch } from "react-icons/fi";
import { MdOutlineWork } from "react-icons/md";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../Components/ThemeToggle";

const Navbar = () => {
  return (
    <div className="w-full bg-linear-to-br from-[#EBF3FF] to-[#D8E4FF] backdrop-blur-lg  sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-3 flex justify-between items-center">
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <MdOutlineWork className="text-[#2D6CF4] text-4xl transition" />
          <span className="text-2xl font-extrabold text-gray-800 tracking-wide">
            Career
            <span className="text-[#2D6CF4]">Code</span>
          </span>
        </motion.div>

        {/* NAV LINKS */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <NavLink to={"/"} className="hover:text-[#2D6CF4] transition">
            Home
          </NavLink>
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

        {/* BUTTONS + THEME TOGGLE */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <NavLink
            to={"/login"}
            className="hidden md:block px-5 py-2 rounded-lg bg-transparent border border-[#2D6CF4] text-[#2D6CF4] font-semibold hover:bg-[#2D6CF4] hover:text-white transition"
          >
            Log in
          </NavLink>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-5 py-2 rounded-lg bg-[#2D6CF4] hover:bg-[#1F54C2] text-white font-semibold transition"
          >
            Sign up
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
