
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Filter from "./Filter";

const Header = () => {
  return (
    <div>
      <header className="flex  py-4  sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative ">
        <div className="flex flex-wrap items-center justify-between gap-4 w-full">
          <img src="/logo.png" alt="Logo" className="h-[50 px] w-[50px] object-contain" />
          <Link
            href="#"
            className="lg:absolute max-lg:left-10 lg:top-2/4 lg:left-2/4 lg:-translate-x-1/2 lg:-translate-y-1/2"
          >
            <h2 className="logo-name text-black  justify-items-center text-3xl w-[100%]   ">
              LOGO
            </h2>
          </Link>
          <div
            id="collapseMenu"
            className="max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
          ></div>
          <div className="flex items-center ml-auto space-x-6">
            <ul className="lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 ">
             
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link to="#">
                  <img
                    src="/search.png"
                    alt="contrast icon"
                    className="h-[32px] w-[32px] object-contain"
                  />
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link to="#">
                  <img
                    src="/heart.png"
                    alt="favorite icon"
                    className="h-[32px] w-[32px] object-contain"
                  />
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link to="#">
                  <img
                    src="/shop.png"
                    alt="bag icon"
                    className="h-[32px] w-[32px] object-contain"
                  />
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link to="#">
                  <img
                    src="/user.png"
                    alt="lock icon"
                    className="h-[32px] w-[32px] object-contain"
                  />
                </Link>
              </li>
              <li>
                <div className="flex items-center gap-[5px]">
                  <header
                    size="xs"
                    as="h6"
                    className="h-[32px] w-[32px] object-contain"
                  >
                    ENG
                  </header>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <header className="flex justify-center  py-4  sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
      <Navigation/>
      </header>
     
    </div>
  );
};

export default Header;
