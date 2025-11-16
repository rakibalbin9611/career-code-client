import { use } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../Components/ThemeToggle";
import { AuthContext } from "../contexts/AuthContext/AuthContext";

const Navbar = () => {
  const { user } = use(AuthContext);
  const { signOutUser } = use(AuthContext);
  
  const handleLogout = () => {
    // Implement logout functionality here
    console.log("Logout clicked");
    signOutUser()
    .then(()=>{
      console.log("User logged out");
      alert("User logged out");
    }).catch((error)=>{
      console.error(error);
    });

  }
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink> 
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <a className="btn btn-ghost text-xl">JobPortal</a>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-3">
        <ThemeToggle />

        {user?.uid ? (
          <button onClick={handleLogout} className="btn btn-primary btn-sm">Logout</button>
        ) : (
          <>
            <NavLink to={"/register"} className="btn btn-primary btn-sm">
              Register
            </NavLink>
            <NavLink to={"/login"} className="btn btn-primary btn-sm">
              Login
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
