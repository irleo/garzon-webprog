import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";


const Layout = () => {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900">
      <NavBar />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
