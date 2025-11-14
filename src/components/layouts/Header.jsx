import { useState } from "react";
import { IoClose, IoMenuOutline, IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import CartMenu from "../ui/CartMenu";

function Header() {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="w-full h-full static">
        <div className="w-full px-10 py-5 m-auto bg-white shadow-md flex justify-center relative z-20">
          <div className="w-full max-w-7xl m-auto flex justify-between items-center flex-wrap">
            {/* Header logo */}
            <div className="pr-4">
              <strong className="text-2xl">Ultras</strong>
            </div>

            <div className="text-center hidden md:flex gap-8 font-serif">
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
              {/* cart button */}
              <button onClick={() => setCartOpen(!isCartOpen)}>
                <IoCartOutline />
              </button>

              {/* hambureger creatio */}
              <div className="block md:hidden">
                <button onClick={()=> setMenuOpen(!isMenuOpen)}>
                  <IoMenuOutline />
                </button>
              </div>
            </div>
          </div>
        </div>
        { isMenuOpen ? (<div className="absolute top-0 left-0 w-full h-full z-10 fixed">
            <div className="h-full  flex justify-center items-center">
            <div className="text-center h-full w-full flex flex-col justify-center items-center gap-8 font-serif bg-white">
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
            </div>
          </div>) : null
          }
      </header>
      {isCartOpen ? (
        <div className="absolute inset-0 left-0 top-0 z-10 fixed">
          <div className="relative h-full text-red flex justify-end">
            <div className="w-full h-full bg-black opacity-20 absolute top-0 left-0 "></div>
            <div className="w-full max-w-xl z-10 bg-white">
              <div className="text-2xl flex justify-between p-4 bg-orange-100">
                <div>
                  <h2 className="font-serif">Items in your cart</h2>
                </div>
                <div>
                  <button onClick={() => setCartOpen(!isCartOpen)}>
                    <IoClose />
                  </button>
                </div>
              </div>

              <div className="h-full flex justify-between flex-col px-3">
                <div className="h-full w-full overflow-hidden">
                  <div className="p-3">
                    <div className="flex">
                      {/* image section */}
                      <div className=""></div>
                      <div className="w-full">
                        <h4 className="mb-2">Product title</h4>
                        <p className="mb-2">
                          Color : <span>Black</span>
                        </p>
                        <p className="mb-2">
                          Size : <span>xl</span>
                        </p>
                        <div className="flex justify-between items-center">
                          {/* product price */}
                          <div>$32</div>
                          {/* total price */}
                          <div>$32</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center py-2 px-5 border-1 my-2 bg-amber-100 rounded-full">
                        <button>-</button>
                        <h4>Count</h4>
                        <button>+</button>
                      </div>
                    </div>
                  </div>

                  {/* empty cart msg
                            <div className="grid place-items-center h-full">
                              <div className="">
                              <h3 className="text-2xl md:text-3xl text-gray-800 mb-2">Your cart is empty</h3>
                              <p className="text-gray-600 text-xl">Add some items to the cart</p>
                              </div>
                            </div> */}
                </div>
                <div className="text-center py-4 px-4 mb-20">
                  <div className="my-3">
                    <h3 className="text-2xl mb-2">SubTotal : $0</h3>
                    <p className="text-gray-700 text-base">
                      Taxes and shipping calculated at checkout
                    </p>
                  </div>
                  <div className="w-full mt-5">
                    <div className="w-full py-1 border-1 text-gray-600 hover:bg-black hover:text-white cursor-pointer rounded-full text-center mb-3 transition-all duration-300">
                      <button className="p-2 text-base  font-medium uppercase">
                        Go To Cart
                      </button>
                    </div>
                    <div className="w-full py-1 rounded-full text-center bg-gray-500">
                      <button className="p-2 text-base text-white font-medium uppercase">
                        Check out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-0 h-full"></div>
      )}
    </>
  );
}

export default Header;
