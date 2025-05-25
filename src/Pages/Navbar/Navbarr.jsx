import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Navbarr = () => {
  const { user, signOutUser } = useAuth();
  const handleSignOut = () => {
    signOutUser()
      .then((res) => {
        toast.success("Successfully Signout");
      })
      .catch((error) => console.log(error));
  };
  const links = (
    <>
      <NavLink to={"/"} className={"btn"}>
        <li>Home</li>
      </NavLink>
      <NavLink to={"alltrainer"} className={"btn"}>
        <li>All Trainer</li>
      </NavLink>
      <NavLink to={"allclassess"} className={"btn"}>
        <li>All Classes</li>
      </NavLink>
      <NavLink to={"community"} className={"btn"}>
        <li>Community</li>
      </NavLink>
      {user && (
        <NavLink to={"dashboard"} className={"btn"}>
          <li>Dashboard</li>
        </NavLink>
      )}
    </>
  );
  return (
    <div className="sticky top-0 left-0 w-full z-50 backdrop-blur bg-opacity navbar bg-gray-200/30 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="font-bold text-2xl" to={"/"}>
          NaturaFit
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          <>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring-2 ring-offset-2">
                <img src={user?.photoURL} />
              </div>
            </div>
            <button onClick={handleSignOut} className="btn">
              Sign out
            </button>
          </>
        ) : (
          <>
            <NavLink className={"btn"} to={"/login"}>
              Login
            </NavLink>
            <NavLink className={"btn"} to={"/signup"}>
              Sign up
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbarr;
