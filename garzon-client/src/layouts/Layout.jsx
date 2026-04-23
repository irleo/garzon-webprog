import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";


const Layout = () => {
  return (
    <div className="min-h-screen bg-background/10 text-foreground">
      <div className="cosmic-decor"/>
      <NavBar />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
