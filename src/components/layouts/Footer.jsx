import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="w-full h-fit  bg-gray-100 ">
        <div className="px-10 py-12 md:px-20 md:py-25 ">
          <div className="max-w-7xl m-auto">
            <div className="w-full h-full  m-auto flex lg:justify-between flex-col lg:flex-row  gap-8 mb-8 pb-12 border-b-2 ">
              {/* Subscribe & email */}
              <div className="w-full lg:w-1/3 block h-full">
                <div className="mb-5 h-full">
                  <h3 className="text-2xl font-medium font-sans">
                    Subscribe to get 10% OFF
                  </h3>
                  <p>Subscribe for store updates and discounts.</p>
                </div>
                <div className="relative inline-block">
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full max-w-96 p-1 px-4 font-medium bg-white caret-blue-500 f rounded-full "
                  />
                  <div className="absolute text-center right-3 top-2">
                    <BsArrowRight />
                  </div>
                </div>
              </div>

              {/* Footer menus */}
              <div className="flex w-full md:2/3 gap-4 justify-between flex-col md:flex-row ">
                {/* quick links */}
                <div className="flex flex-col gap-2 ">
                  <h4 className="font-semibold">Quick Links</h4>

                  <NavLink
                    to="/"
                    className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.25 hover:after:w-full after:transition-all after:duration-300 after:bg-black"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/"
                    className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.25 hover:after:w-full after:transition-all after:duration-300 after:bg-black"
                  >
                    Story
                  </NavLink>
                  <NavLink
                    to="/"
                    className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.25 hover:after:w-full after:transition-all after:duration-300 after:bg-black"
                  >
                    Shop
                  </NavLink>
                  <NavLink
                    to="/"
                    className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.25 hover:after:w-full after:transition-all after:duration-300 after:bg-black"
                  >
                    Testimonials
                  </NavLink>
                  <NavLink
                    to="/"
                    className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.25 hover:after:w-full after:transition-all after:duration-300 after:bg-black"
                  >
                    Blog
                  </NavLink>
                </div>

                {/* categories */}
                <div className="flex flex-col gap-2 ">
                  <h4 className="font-semibold">Categories</h4>

                  <NavLink
                    to="/"
                    className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.25 hover:after:w-full after:transition-all after:duration-300 after:bg-black"
                  >
                    Bestseller's
                  </NavLink>
                  <NavLink
                    to="/"
                    className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.25 hover:after:w-full after:transition-all after:duration-300 after:bg-black"
                  >
                    Men's
                  </NavLink>
                  <NavLink
                    to="/"
                    className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.25 hover:after:w-full after:transition-all after:duration-300 after:bg-black"
                  >
                    Women's
                  </NavLink>
                  <NavLink
                    to="/"
                    className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.25 hover:after:w-full after:transition-all after:duration-300 after:bg-black"
                  >
                    New Arrival's
                  </NavLink>
                  <NavLink
                    to="/"
                    className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.25 hover:after:w-full after:transition-all after:duration-300 after:bg-black"
                  >
                    Style Essentials
                  </NavLink>
                  <NavLink
                    to="/"
                    className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.25 hover:after:w-full after:transition-all after:duration-300 after:bg-black"
                  >
                    Summer Collections
                  </NavLink>
                </div>

                {/* Customer care */}
                <div className="flex flex-col gap-2 ">
                  <h4 className="font-semibold">Customer care</h4>

                  <NavLink
                    to="/"
                    className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.25 hover:after:w-full after:transition-all after:duration-300 after:bg-black"
                  >
                    Terms and Conditions
                  </NavLink>
                  <NavLink
                    to="/"
                    className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.25 hover:after:w-full after:transition-all after:duration-300 after:bg-black"
                  >
                    Shoping & Returns
                  </NavLink>
                  <NavLink
                    to="/"
                    className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.25 hover:after:w-full after:transition-all after:duration-300 after:bg-black"
                  >
                    FAQ
                  </NavLink>
                  <NavLink
                    to="/"
                    className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.25 hover:after:w-full after:transition-all after:duration-300 after:bg-black"
                  >
                    Contact
                  </NavLink>
                  <NavLink
                    to="/"
                    className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.25 hover:after:w-full after:transition-all after:duration-300 after:bg-black"
                  >
                    404
                  </NavLink>
                </div>
              </div>
            </div>
            {/* Resever rights */}
            <div className="font-extralight py-4">
                <p>© Monu 2025 Ultras. All Rights Reserved.</p>

            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
