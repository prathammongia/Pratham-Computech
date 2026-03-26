import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import TopBar from "./TopBar";
import { useState } from "react";

const Navbar = () => {

  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <TopBar />

      <div className="sticky top-0 z-50 bg-white px-8 py-4 flex justify-between items-center shadow">

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

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >

            <span className="cursor-pointer hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500 pb-1">
              SERVICES
            </span>

            {dropdown && (
              <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg w-60 py-2 z-50">

                <Link 
                  to="/services/new-products"
                  className="block px-4 py-2 hover:bg-orange-50"
                >
                  New Products & Systems
                </Link>

                <Link 
                  to="/services/sell-device"
                  className="block px-4 py-2 hover:bg-orange-50"
                >
                  Sell Your Device
                </Link>

                <Link 
                  to="/services/repair"
                  className="block px-4 py-2 hover:bg-orange-50"
                >
                  Repair & Maintenance
                </Link>

                <Link 
                  to="/services/business"
                  className="block px-4 py-2 hover:bg-orange-50"
                >
                  Business IT Solutions
                </Link>

              </div>
            )}

          </div>

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