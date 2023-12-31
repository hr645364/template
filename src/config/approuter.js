import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "../pages/home";
// import About from "../pages/about";
// import Services from "../pages/services";
// import BANavbar from "../components/SMNavbar";
// import Profile from "../pages/profile";
// import Login from "../pages/login";
import DashboardPage from "../pages/dashboard";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        {/* <BANavbar /> */}
        <Routes>
          <Route path="/*" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
