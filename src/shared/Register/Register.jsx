import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import Lottie from "lottie-react";
import registerAnimation from "../../assets/Register.json";
import { use } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { NavLink } from "react-router-dom";

export default function Register() {
  const { createUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration logic here
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#EBF3FF] to-[#D8E4FF] px-4">
      <div className="card lg:card-side  max-w-4xl w-full">
        {/* Registration Form (Left Side) */}
        <div className="card-body lg:w-1/2">
          <h2 className="text-3xl font-bold text-center text-[#2D6CF4]">
            Create Account
          </h2>
          <p className="text-center text-gray-600 mb-4">
            Register to explore thousands of jobs.
          </p>

          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name */}
            <label className="input input-bordered flex items-center gap-2 border-[#2D6CF4]/40 focus-within:border-[#2D6CF4]">
              <FaUser className="text-[#2D6CF4]" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="grow"
                required
              />
            </label>

            {/* Email */}
            <label className="input input-bordered flex items-center gap-2 border-[#2D6CF4]/40 focus-within:border-[#2D6CF4]">
              <FaEnvelope className="text-[#2D6CF4]" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="grow"
                required
              />
            </label>

            {/* Password */}
            <label className="input input-bordered flex items-center gap-2 border-[#2D6CF4]/40 focus-within:border-[#2D6CF4]">
              <FaLock className="text-[#2D6CF4]" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="grow"
                required
              />
            </label>

            {/* Submit Button */}
            <button className="btn w-full mt-2 bg-[#2D6CF4] hover:bg-[#1F54C2] border-none text-white">
              Register
            </button>

            <p className="text-center text-sm">
              Already have an account?
              <NavLink to={"/login"} className="text-[#2D6CF4] font-semibold">
                Login
              </NavLink>
            </p>
          </form>
        </div>

        {/* Lottie Animation (Right Side) */}
        <figure className="lg:w-1/2 p-8 hidden lg:block">
          <Lottie animationData={registerAnimation} loop={true} />
        </figure>
      </div>
    </div>
  );
}
