import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HeroUIProvider } from "@heroui/react";
import Navbarr from "./Pages/Shared/Navbar/Navbarr.jsx";
import Login from "./Pages/Login/Login.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeroUIProvider>
      {/* <App /> */}
      <Navbarr></Navbarr>
      <Login></Login>
    </HeroUIProvider>
  </StrictMode>
);
