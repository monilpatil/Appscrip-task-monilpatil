import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <header className="flex flex-col sm:flex-row py-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative ">
        <div className="flex items-center justify-between w-full pl-12 sm:pl-0">
          <Link to="/#">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-[32px] w-[32px] object-contain sm:h-11 sm:w-11 "
            />
          </Link>
          <Link
            to="#"
            className="lg:absolute max-lg:left-10 lg:top-2/4 lg:left-2/4 lg:-translate-x-1/2 lg:-translate-y-1/2"
          >
            <h2 className="logo-name text-black text-3xl text-center ">LOGO</h2>
          </Link>
          <div className="">
            <ul className="  md:flex flex mr-0 px-0">
              <li>
                <Link to="#">
                  <img
                    src="/search.png"
                    alt="Search icon"
                    className="h-[35px] w-[35px] object-contain"
                  />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img
                    src="/heart.png"
                    alt="Favorite icon"
                    className="h-[35px] w-[35px] object-contain"
                  />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img
                    src="/shop.png"
                    alt="Bag icon"
                    className="h-[35px] w-[35px] object-contain"
                  />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img
                    src="/user.png"
                    alt="User icon"
                    className="h-[35px] w-[35px] object-contain hidden sm:block"
                  />
                </Link>
              </li>
              <li>
                <div className="flex items-center space-x-4">
                  <div className="relative hidden sm:block">
                    <div
                      className="flex items-center cursor-pointer mt-[6px]"
                      onClick={toggleDropdown}
                    >
                      <span>ENG</span>
                      <span>
                        {dropdownOpen ? (
                          <FaChevronUp className="text-black ml-5" />
                        ) : (
                          <FaChevronDown className="text-black ml-5" />
                        )}
                      </span>
                      <i
                        className={`icon-down  transform transition-transform ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                      ></i>
                    </div>
                    {dropdownOpen && (
                      <ul className="absolute right-0 mt-2 w-32 bg-white  z-50">
                        <li className="p-2 cursor-pointer hover:bg-gray-100">
                          ENG
                        </li>
                        <li className="p-2 cursor-pointer hover:bg-gray-100">
                          HINDI
                        </li>
                        <li className="p-2 cursor-pointer hover:bg-gray-100">
                          GUJARATI
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </li>
            </ul>

            
          </div>
        </div>
        {/* Mobile menu button */}
        <div className="sm:hidden  flex absolute ">
          <button
            id="menuButton"
            className="p-2 focus:outline-none "
            onClick={() => {
              document.getElementById("mobileMenu").classList.toggle("hidden");
            }}
          >
            <FiMenu className="text-2xl" />
          </button>
        </div>
        <div id="mobileMenu" className="  items-center mt-4 hidden sm:hidden">
          <Navigation />
        </div>
      </header>
      <header className=" justify-center py-2 hidden sm:block  sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative ">
        <Navigation />
      </header>
      <div className="text-center py-2">
        <h1 className="text-3xl text-black font-bold mb-4">
          DISCOVER OUR PRODUCTS
        </h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
    </div>
  );
};

export default Header;
