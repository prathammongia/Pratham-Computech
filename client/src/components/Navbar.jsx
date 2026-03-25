import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import TopBar from "./TopBar";

const Navbar = () => {
  return (
    <>
      <TopBar />

      <div className="bg-white px-8 py-4 flex justify-between items-center shadow">

        <Link to="/">
          <img
            src={logo}
            alt="Pratham Computech"
            className="h-20"
          />
        </Link>

        <div className="flex gap-10 font-semibold text-gray-800">

          <Link 
            to="/" 
            className="hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 pb-1"
          >
            HOME
          </Link>

          <Link 
            to="/about"
            className="hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 pb-1"
          >
            ABOUT US
          </Link>

          <Link 
            to="/products"
            className="hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 pb-1"
          >
            SERVICES
          </Link>

          <Link 
            to="/contact"
            className="hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 pb-1"
          >
            CONTACT US
          </Link>

        </div>

      </div>
    </>
  );
};

export default Navbar;