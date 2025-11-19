import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { MdOutlineCategory, MdLocationPin } from "react-icons/md";

const Banner = () => {
  return (
    <div className="bg-linear-to-br from-[#EBF3FF] to-[#D8E4FF] pt-28 pb-24 w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            The{" "}
            <span className="text-[#2D6CF4] drop-shadow-md">Easiest Way</span>{" "}
            <br />
            to Find Your Dream Job
          </h1>

          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Join over{" "}
            <span className="font-semibold text-gray-800">
              3 million job seekers
            </span>
            who use our platform every month to explore career opportunities and
            make
            <span className="font-semibold text-gray-800"> 140,000+</span>{" "}
            applications daily.
          </p>

          {/* GLASS SEARCH BOX */}
          <div
            className="mt-8 backdrop-blur-lg bg-white/40 border border-white/30 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl p-5 flex flex-col lg:flex-row gap-4"
            style={{ transition: "0.3s" }}
          >
            <div className="flex items-center bg-white/60 border border-white/40 rounded-lg px-3 py-2 backdrop-blur-sm w-full">
              <MdOutlineCategory className="text-gray-500 text-2xl" />
              <select className="w-full bg-transparent outline-none ml-2 text-gray-700 font-medium">
                <option>Industry</option>
                <option>Tech</option>
                <option>Marketing</option>
                <option>Finance</option>
              </select>
            </div>

            <div className="flex items-center bg-white/60 border border-white/40 rounded-lg px-3 py-2 backdrop-blur-sm w-full">
              <MdLocationPin className="text-gray-500 text-2xl" />
              <input
                type="text"
                placeholder="Location"
                className="w-full ml-2 bg-transparent outline-none text-gray-700 font-medium"
              />
            </div>

            <div className="flex items-center bg-white/60 border border-white/40 rounded-lg px-3 py-2 backdrop-blur-sm w-full">
              <FiSearch className="text-gray-500 text-xl" />
              <input
                type="text"
                placeholder="Job title, keywords..."
                className="w-full ml-2 bg-transparent outline-none text-gray-700 font-medium"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="btn bg-[#2D6CF4] hover:bg-[#1A4FCB] text-white w-full lg:w-auto px-6"
            >
              <FiSearch className="mr-2 text-xl" /> Search
            </motion.button>
          </div>

          {/* POPULAR SEARCH */}
          <p className="mt-4 text-gray-700">
            Popular Searches:
            <span className="text-[#2D6CF4] ml-2 hover:underline cursor-pointer">
              UI/UX Designer
            </span>
            ,
            <span className="text-[#2D6CF4] ml-1 hover:underline cursor-pointer">
              Web Developer
            </span>
            ,
            <span className="text-[#2D6CF4] ml-1 hover:underline cursor-pointer">
              Software Engineer
            </span>
          </p>
        </div>

        {/* RIGHT IMAGES WITH ANIMATION */}
        <div className="relative flex justify-center">
          {/* TOP IMAGE */}
          <motion.img
            src="https://images.pexels.com/photos/3182754/pexels-photo-3182754.jpeg"
            alt="Team Work"
            className="rounded-xl shadow-xl border-[5px] border-[#2D6CF4]/40 w-[410px] object-cover drop-shadow-lg"
            animate={{ y: [0, 25, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* BOTTOM IMAGE */}
          <motion.img
            src="https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg"
            alt="Meeting"
            className="rounded-3xl shadow-xl border-[5px] border-[#1A4FCB]/40 w-[260px] absolute bottom-[-40px] right-[-35px] object-cover drop-shadow-md"
            animate={{ y: [0, -25, 0], rotate: [0, -2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
