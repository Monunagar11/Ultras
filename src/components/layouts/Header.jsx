import { IoMenuOutline, IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="w-full h-fit static">
        <div className="w-full px-10 py-5 m-auto bg-white shadow-md flex justify-center ">
          <div className="w-full max-w-7xl m-auto flex justify-between items-center">
            {/* Header logo */}
            <div className="pr-4">
              <strong className="text-2xl">Ultras</strong>
            </div>

            <div className="text-center hidden md:flex gap-8 font-serif ">
              <NavLink
                to="/"
                className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.25 hover:after:w-full after:transition-all after:duration-300 after:bg-black"
              >
                Home
              </NavLink>
              <NavLink
                to="/newarraivals"
                className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.25 hover:after:w-full after:transition-all after:duration-300 after:bg-black"
              >
                New Arraivals
              </NavLink>
              <NavLink
                to="/mens"
                className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.25 hover:after:w-full after:transition-all after:duration-300 after:bg-black"
              >
                Mens
              </NavLink>
              <NavLink
                to="/womens"
                className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.25 hover:after:w-full after:transition-all after:duration-300 after:bg-black"
              >
                Womens
              </NavLink>
              <NavLink
                to="/shop"
                className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.25 hover:after:w-full after:transition-all after:duration-300 after:bg-black"
              >
                Shop
              </NavLink>
              <NavLink
                to="/contact"
                className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.25 hover:after:w-full after:transition-all after:duration-300 after:bg-black"
              >
                Contact
              </NavLink>
            </div>

            {/* Header Items */}
            <div className="flex justify-center items-center gap-4 text-2xl">
              <IoSearch />
              <IoCartOutline />

              {/* hambureger creatio */}
              <div className="block md:hidden">
                <IoMenuOutline />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
