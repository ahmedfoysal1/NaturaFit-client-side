import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Signup from "../Components/Signup/Signup";
import Signin from "../Components/SignIn/SignIn";
import Home from "../Pages/Home/Home";
import AllTrainer from "../Pages/AllTrainer/AllTrainer/AllTrainer";
import AllCalssess from "../Pages/AllClassess/AllCalssess";
import Community from "../Pages/Community/Community";
import TrainerDetails from "../Pages/AllTrainer/TrainerDetails/Trainerdetails";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import TrainerBooked from "../Pages/AllTrainer/TrainerBooked/TrainerBooked";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Betrainer from "../Pages/AllTrainer/BeTrainer/Betrainer";
import NewsletterSubscriber from "../Dashboard/NewLetters/NewsletterSubscriber";
import Alltrainertable from "../Dashboard/AllTrainertable/Alltrainertable";
import Appliedtrainers from "../Dashboard/Appliedtrainer/Appliedtrainers";
import Balance from "../Dashboard/Balance/Balance";
import Addnewclass from "../Dashboard/Addnewclass/Addnewclass";
import Users from "../Dashboard/Users/Users";
import AdminRoute from "../AdminRoute/AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Signin></Signin>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "alltrainer",
        element: <AllTrainer></AllTrainer>,
      },
      {
        path: "allclassess",
        element: <AllCalssess></AllCalssess>,
        loader: () => fetch("http://localhost:5000/classesscount"),
      },
      {
        path: "community",
        element: <Community></Community>,
      },
      {
        path: "trainer/:id",
        element: <TrainerDetails></TrainerDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/trainers/${params.id}`),
      },
      {
        path: "trainerbooked/:id/:slot",
        element: (
          <PrivateRoute>
            <TrainerBooked></TrainerBooked>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/trainers/${params.id}?slot=${params.slot}`
          ),
      },
      {
        path: "betrainer",
        element: (
          <PrivateRoute>
            <Betrainer></Betrainer>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <AdminRoute>
        <Dashboard></Dashboard>
      </AdminRoute>
    ),
    children: [
      {
        path: "users",
        element: (
          <AdminRoute>
            <Users></Users>
          </AdminRoute>
        ),
      },
      {
        path: "newslettersubscribers",
        element: (
          <AdminRoute>
            <NewsletterSubscriber></NewsletterSubscriber>
          </AdminRoute>
        ),
      },
      {
        path: "alltrainerinfo",
        element: (
          <AdminRoute>
            <Alltrainertable></Alltrainertable>
          </AdminRoute>
        ),
      },
      {
        path: "appliedtrainer",
        element: <Appliedtrainers></Appliedtrainers>,
      },
      {
        path: "balance",
        element: <Balance></Balance>,
      },
      {
        path: "addnewclass",
        element: <Addnewclass></Addnewclass>,
      },
    ],
  },
]);
