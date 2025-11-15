import { FaEnvelope, FaLock } from "react-icons/fa";
import Lottie from "lottie-react";
import loginAnimation from "../../../assets/Login.json";
import { NavLink } from "react-router-dom";
import { use } from "react";
import { AuthContext } from "../../../contexts/AuthContext/AuthContext";

export default function Login() {
  const { signInUser } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // Sign in user
    signInUser(email, password)
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
        {/* Form - Left Side */}
        <div className="card-body lg:w-1/2">
          <h2 className="text-3xl font-bold text-center">Sign In</h2>
          <p className="text-center text-gray-500 mb-4">
            Welcome back! Sign in to continue.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
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

            {/* Forgot Password */}
            <div className="text-right">
              <a
                href="/forgot-password"
                className="text-sm text-primary underline"
              >
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button className="btn btn-primary w-full mt-2">Sign In</button>

            {/* Register Link */}
            <p className="text-center text-sm">
              Don’t have an account?
              <NavLink to={"/register"}>Create Account</NavLink>
            </p>
          </form>
        </div>

        {/* Lottie Animation - Right Side */}
        <figure className="lg:w-1/2 p-8 hidden lg:block">
          <Lottie animationData={loginAnimation} loop={true} />
        </figure>
      </div>
    </div>
  );
}
