import GridList from "../../components/ui/GridList";

import { MdOutlineLocalShipping } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import { HiOutlineWallet } from "react-icons/hi2";
import { PiShoppingCartBold } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";

import Featured1 from "../../assets/Images/featured-collection-1.jpg";
import Featured2 from "../../assets/Images/featured-collection-2.jpg";
import Popular1 from "../../assets/Images/popular-1.jpg";
import Popular2 from "../../assets/Images/popular-2.jpg";
import Popular3 from "../../assets/Images/popular-3.jpg";
import Popular4 from "../../assets/Images/popular-4.jpg";

function index() {
  // Propular products Lists
  const PopularProducts = [
    {
      id: 1,
      imageUrl: Popular1,
      title: "Ridge knit jacket",
      type: "Sport Jackets",
      price: "85",
    },
    {
      id: 2,
      imageUrl: Popular2,
      title: "Adventure Ready Boys’ Sweater",
      type: "Sweaters",
      price: "45",
    },
    {
      id: 1,
      imageUrl: Popular3,
      title: "Pure Whimsy Baby Tee",
      type: "T-Shirts",
      price: "32",
    },
    {
      id: 1,
      imageUrl: Popular4,
      title: "Ultimate Comfort FlexFit Leggings",
      type: "Leggings",
      price: "32",
    },
  ];

  return (
    <>
      {/* // features Section */}
      <section className="w-full h-fit bg-gray-200">
        <div className="p-10 m-auto max-w-7xl">
          <div className="w-full flex flex-col md:flex-row justify-between">
            <div className="border-b-1 md:border-r-1 md:border-b-0 w-full md:w-1/4">
              <div className="text-center grid place-items-center gap-3 p-4">
                <div className="p-3 rounded-full bg-white ">
                  <MdOutlineLocalShipping className="text-4xl" />
                </div>
                <h2 className="text-2xl font-semibold">Free Shipping</h2>
                <h4>Enjoy free shipping on everything.</h4>
              </div>
            </div>

            <div className="border-b-1 md:border-r-1 md:border-b-0 w-full md:w-1/4">
              <div className="text-center grid place-items-center gap-3 p-4">
                <div className="p-3 rounded-full bg-white ">
                  <BsQuestionCircle className="text-4xl" />
                </div>
                <h2 className="text-2xl font-semibold">Customer Support</h2>
                <h4>Always here to assist you</h4>
              </div>
            </div>

            <div className="border-b-1 md:border-r-1 md:border-b-0 w-full md:w-1/4">
              <div className="text-center grid place-items-center gap-3 p-4">
                <div className="p-3 rounded-full bg-white ">
                  <HiOutlineWallet className="text-4xl" />
                </div>
                <h2 className="text-2xl font-semibold">Secure Payments</h2>
                <h4>Fast, safe, and secure payments.</h4>
              </div>
            </div>

            <div className="BsQuestionCircle w-full md:w-1/4">
              <div className="text-center grid place-items-center gap-3 p-4">
                <div className="p-3 rounded-full bg-white ">
                  <PiShoppingCartBold className="text-4xl" />
                </div>
                <h2 className="text-2xl font-semibold">Shemless Shoppings</h2>
                <h4>Smooth, easy, and convenient.</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* // Featured Collections */}
      <section className="w-full h-fit ">
        <div className="max-w-7xl m-auto">
          <div className="px-5 py-8 md:py-20 md:m-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-20">
              <div className="p-4 w-full md:w-1/3">
                <h2 className="text-2xl md:text-5xl tracking-widest font-normal font-serif mb-8">
                  Featured Collections
                </h2>
                <p className="md:text-base font-normal mb-12">
                  Discover the latest additions to our best-selling Loungewear
                  collection.
                </p>

                <div>
                  <button className="px-8 py-2 border-1 font-medium rounded-3xl hover:bg-black hover:text-white transition-all duration-300">
                    Shop Now
                  </button>
                </div>
              </div>

              <div className="w-full h-full md:w-2/3 flex flex-col items-end md:justify-between md:flex-row gap-5">
                {/* featured collection 1 */}
                <div className="w-full md:w-1/2 md:mt-10 border-1 border-gray-100 shadow-2xs group">
                  <div className="w-full h-full ">
                    <img
                      src={Featured1}
                      alt="Featured collection 1"
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <div className="flex justify-between items-center p-4 mx-4">
                    <h3 className="text-2xl">Women</h3>
                    <div className=" group overflow-hidden flex flex-col justify-center items-center relative">
                      <GoArrowUpRight className="h-full w-full text-2xl group-hover:translate-x-6 group-hover:-translate-y-6 transition-all duration-500" />
                      <GoArrowUpRight className="h-full w-full text-2xl -translate-x-6 translate-y-6 absolute bottom-0 left-0 group-hover:translate-x-0 group-hover:-translate-y-0 transition-all duration-500" />
                    </div>
                  </div>
                </div>
                {/* featured collection 2 */}
                <div className="w-full md:w-1/2 border-1 border-gray-100 shadow-2xs group">
                  <div className="w-full h-full ">
                    <img
                      src={Featured2}
                      alt="Featured collection 2"
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <div className="flex justify-between items-center p-4 mx-4">
                    <h3 className="text-2xl">Men</h3>
                    <div className="overflow-hidden flex flex-col justify-center items-center relative">
                      <GoArrowUpRight className="h-full w-full text-2xl group-hover:translate-x-6 group-hover:-translate-y-6 transition-all duration-500" />
                      <GoArrowUpRight className="h-full w-full text-2xl -translate-x-6 translate-y-6 absolute bottom-0 left-0 group-hover:translate-x-0 group-hover:-translate-y-0 transition-all duration-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="w-full h-full">
        <div className="max-w-7xl m-auto">
          <div className="px-5 py-5 md:m-auto">
            <div className="py-4 md:py-8 text-3xl md:text-5xl tracking-tight font-mono">
              <h2>Popular Products</h2>
            </div>
            <GridList List={PopularProducts} />
          </div>
        </div>
      </section>

            {/* Top Collections Section */}
      <section className="w-full h-full">
        <div className="max-w-7xl m-auto">
          <div className="px-5 py-5 md:m-auto">
            <div className="py-4 md:py-8 text-3xl md:text-5xl text-center tracking-tight font-mono">
              <h2>Top Collections</h2>
            </div>
            <div className="w-full h-full grid grid-flow-row md:grid-cols-2">
                
                <div className="w-full h-full ">

                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
