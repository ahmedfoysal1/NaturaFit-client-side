import { IoMailOpenOutline } from "react-icons/io5";
import { PiChalkboardTeacherThin } from "react-icons/pi";
import { VscGitStashApply } from "react-icons/vsc";
import { MdAttachMoney } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import "./dashboard.css";

import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FaRegUser } from "react-icons/fa";
import useAdmin from "../../Hooks/useAdmin";
import useIsTrainer from "../../Hooks/useIsTrainer";

const Dashboard = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isTrainer] = useIsTrainer();
  console.log("dashboard admin", isAdmin);
  console.log("dashboard trainer", isTrainer);
  return (
    <div className="flex">
      <div className="h-full text-center m-2 border p-2">
        <div>
          <div className="avatar">
            <div className="ring-offset-blue-500 w-24 rounded-full ring-2 ring-offset-2">
              <img src={user.photoURL} />
            </div>
          </div>
          <h2 className="font-bold text-xl my-2">{user?.displayName}</h2>
        </div>
        <ul className="main p-4 space-y-2">
          <li>
            <NavLink
              className={
                "flex text-center items-center p-2 gap-2 rounded-lg border"
              }
              to={"/"}
            >
              <IoHomeOutline /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                "flex text-center items-center p-2 gap-2 rounded-lg border"
              }
              to={"/dashboard/users"}
            >
              <FaRegUser /> All Users
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                "flex text-center items-center p-2 gap-2 rounded-lg border"
              }
              to={"/dashboard/newslettersubscribers"}
            >
              <IoMailOpenOutline /> Newsletter Subscribers
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                "flex text-center items-center p-2 gap-2 rounded-lg border"
              }
              to={"/dashboard/alltrainerinfo"}
            >
              <PiChalkboardTeacherThin />
              All Trainer
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                "flex text-center items-center p-2 gap-2 rounded-lg border"
              }
              to={"/dashboard/appliedtrainer"}
            >
              <VscGitStashApply />
              Applied Trainer
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                "flex text-center items-center p-2 gap-2 rounded-lg border"
              }
              to={"/dashboard/balance"}
            >
              <MdAttachMoney />
              Balance
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                "flex text-center items-center p-2 gap-2 rounded-lg border"
              }
              to={"/dashboard/addnewclass"}
            >
              <IoIosAddCircleOutline />
              Add New Class
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 w-full p-2">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
