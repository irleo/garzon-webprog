import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";


const Layout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-cosmic text-foreground">
      <div className="cosmic-decor"/>
      <NavBar />
      <main className="relative z-10 pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
