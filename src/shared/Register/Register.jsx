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
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card lg:card-side bg-base-100 shadow-xl max-w-4xl w-full">
        {/* Registration Form (Left Side) */}
        <div className="card-body lg:w-1/2">
          <h2 className="text-3xl font-bold text-center">Create Account</h2>
          <p className="text-center text-gray-500 mb-4">
            Register to explore thousands of jobs.
          </p>

          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name */}
            <label className="input input-bordered flex items-center gap-2">
              <FaUser />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="grow"
                required
              />
            </label>

            {/* Email */}
            <label className="input input-bordered flex items-center gap-2">
              <FaEnvelope />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="grow"
                required
              />
            </label>

            {/* Password */}
            <label className="input input-bordered flex items-center gap-2">
              <FaLock />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="grow"
                required
              />
            </label>

            {/* Submit Button */}
            <button className="btn btn-primary w-full mt-2">Register</button>

            <p className="text-center text-sm">
              Already have an account?
              <NavLink to={"/login"}>Login</NavLink>
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
