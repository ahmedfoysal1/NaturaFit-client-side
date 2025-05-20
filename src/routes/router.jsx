import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Signup from "../Components/Signup/Signup";
import Signin from "../Components/SignIn/SignIn";
import Home from "../Pages/Home/Home";
import AllTrainer from "../Pages/AllTrainer/AllTrainer/AllTrainer";
import AllCalssess from "../Pages/AllClassess/AllCalssess";
import Community from "../Pages/Community/Community";
import TrainerDetails from "../Pages/AllTrainer/TrainerDetails/TrainerDetails";

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
    ],
  },
]);
