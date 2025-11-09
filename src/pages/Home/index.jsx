import GridList from "../../components/ui/GridList";

import { Md18UpRating, MdOutlineLocalShipping } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import { HiOutlineWallet } from "react-icons/hi2";
import { PiShoppingCartBold } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";
import { GrNext, GrPrevious } from "react-icons/gr";
import { FaStarOfLife } from "react-icons/fa6";

import Hero from "../../assets/Images/hero.png";
import Featured1 from "../../assets/Images/featured-collection-1.jpg";
import Featured2 from "../../assets/Images/featured-collection-2.jpg";
import Popular1 from "../../assets/Images/popular-1.jpg";
import Popular2 from "../../assets/Images/popular-2.jpg";
import Popular3 from "../../assets/Images/popular-3.jpg";
import Popular4 from "../../assets/Images/popular-4.jpg";
import Costal from "../../assets/Images/costal.jpg";
import Tailored1 from "../../assets/Images/tailored-1.jpg";
import Tailored2 from "../../assets/Images/tailored-2.jpg";
import Collection1 from "../../assets/Images/collection-1.jpg";
import Collection2 from "../../assets/Images/collection-2.jpg";
import Collection3 from "../../assets/Images/collection-3.jpg";
import Look1 from "../../assets/Images/look-1.jpg";
import Look2 from "../../assets/Images/look-2.jpg";
import Look3 from "../../assets/Images/look-3.jpg";
import Look4 from "../../assets/Images/look-4.jpg";
import Look5 from "../../assets/Images/look-5.jpg";
import Look6 from "../../assets/Images/look-6.jpg";
import Article1 from "../../assets/Images/Article-1.jpg";
import Article2 from "../../assets/Images/Article-2.jpg";
import Article3 from "../../assets/Images/Article-3.jpg";
import Favorite1 from "../../assets/Images/favorite-1.png";
import Rating from "../../components/ui/Rating";
import { useState } from "react";

function index() {
  const [count, setCount] = useState(0);

  const TestList = [
    {
      id: 1,
      review:
        "Amazing quality and quick delivery! Truly exceeded my expectations with every product.",
      rating: 4.5,
      name: "Ava Martinez",
      place: "Austin, TX",
    },
    {
      id: 2,
      review:
        "Exceptional customer service and stunning designs. I’ll definitely shop here again!",
      rating: 4.5,
      name: "Michael LeeBrown",
      place: "Chicago, IL",
    },
    {
      id: 3,
      review:
        "Incredible customer service and beautiful packaging! Every order feels like a gift.",
      rating: 4.5,
      name: "Sarah Johnson",
      place: "New York, NY",
    },
    {
      id: 4,
      review:
        "The products are top-notch and consistently reliable. Shipping is always faster than expected!",
      rating: 4.5,
      name: "James Brown",
      place: "New York, NY",
    },
    {
      id: 5,
      review:
        "Stylish, durable, and well worth the price. I've recommended this brand to all my friends!",
      rating: 4.5,
      name: "Emily Carter",
      place: "Los Angeles, CA",
    },
  ];

  const handleNext = () => {
    count >= TestList.length - 2
      ? setCount(() => 0)
      : setCount((prev) => prev + 1);
  };

  const handlePrev = () => {
    count <= 0
      ? setCount(() => TestList.length - 2)
      : setCount((prev) => prev - 1);
  };

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

      {/* Hero Section */}
      <section className="w-full min-h-lvh overflow-hidden">
        <div className="max-w-7xl m-auto px-10 pt-10 md:pt-20">
          
          <div className=" md:px-20 relative">
            
          <div className="h-full w-full flex flex-col justify-center items-center relative">
            <div className="hidden md:block absolute top-3 -left-8 bg-amber-200 border-1 -rotate-90 rounded">
              <div className="relative">
                <div className="absolute p-1 -top-3 -right-3 bg-black rounded-full">
                    <FaStarOfLife className="animate-spin text-yellow-400"/> 
                </div>
                  <div className="p-2  w-25 text-xs">
                    <p>Summer is here Get Ready!</p>
                  </div>

                  </div>
            </div>
            <div className="w-full flex justify-center md:justify-between items-center gap-3 md:gap-10">
              <div className="md:pl-15"><h1 className="text-5xl md:text-8xl">YOUR</h1></div>
              <div><h1 className="text-5xl md:text-8xl">STYLE</h1></div>
            </div>
            <div className="w-full flex justify-center md:justify-between items-center gap-3 md:gap-14">
              <div><h1 className="text-5xl md:text-8xl ">STARTS</h1></div>
              <div><h1 className="text-5xl md:text-8xl md:ml-10">HERE</h1></div>
            </div>

          </div>
          <div className="w-full md:w-1/3 p-2 mt-3">
          <p>Discover our new summer collection! Shop now and refresh wardrobe.</p>

          </div>
          <div className="w-full inset-0 md:absolute ">
              <div className="flex justify-center ">
              <img src={Hero} alt="Hero main img for Home page" className="object-cover"/>

              </div>

            </div>
</div>

        </div>

      </section>


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

      {/* Coastal breeze collection */}
      <section className="w-full h-fit">
        <div className="m-auto">
          <div className="relative lg:h-lvh w-full lg:flex justify-center ">
            <div
              className="bg-cover bg-center h-xl lg:h-lvh w-full relative lg:absolute"
              style={{ backgroundImage: `url(${Costal})` }}
            ></div>

            <div className="ml-10 m-auto bg-white z-10 lg:w-1/2 ">
              <div className="p-4 lg:p-20">
                <h1 className="text-2xl  lg:text-5xl mb-8">
                  Coastal breeze collection
                </h1>
                <p className="mb-12 text-base lg:text-2xl  ">
                  Effortless style inspired by the coast.
                </p>
                <div>
                  <button className="py-1 md:py-4 px-4 lg:px-8 text-xl uppercase font-medium bg-black text-white border-1 border-black rounded-full">
                    Shop New Arrivals
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Section */}
      <section className="h-fit md:h-lvh w-full bg-gray-200">
        <div className="m-auto p-10 md:p-20 h-full w-full">
          <div className="w-full h-full flex justify-center items-center text-center relative">
            <div className="md:w-xl ">
              <h2 className="text-2xl md:text-4xl font-medium font-serif mb-6 md:mb-10">
                Tailored, high-quality custom clothing From KnitKnot
              </h2>
              <p className="text-base md:text-xl  mb-6 md:mb-8">
                Custom-designed, high-quality Clothing tailored to reflect the
                unique style of KnitKnot. Crafted with precision and attention
                to detail, ensuring both comfort and durability.
              </p>
              <div>
                <button className="p-2 px-6 border-1 border-black rounded-full hover:bg-black hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div
              className="bg-cover h-2/3 w-1/3 max-w-72 hidden md:block absolute top-0 left-0"
              style={{ backgroundImage: `url(${Tailored1})` }}
            ></div>
            <div
              className="bg-cover h-2/3 w-1/3 max-w-72 hidden md:block absolute right-0 bottom-0"
              style={{ backgroundImage: `url(${Tailored2})` }}
            ></div>
          </div>
        </div>
      </section>

      {/* Top Collections Section */}
      <section className="w-full h-full">
        <div className="max-w-7xl m-auto">
          <div className="px-5 py-5 md:m-auto">
            <div className="py-4 md:py-8 text-3xl md:text-5xl text-center font-serif">
              <h2>Top Collections</h2>
            </div>
            <div className="w-full h-fit grid grid-flow-row md:grid-cols-2 gap-5">
              {/* top collections items 1 */}
              <div className="w-full h-full row-span-2 overflow-hidden relative group">
                <div className="h-full w-full object-cover">
                  <img
                    src={Collection1}
                    alt="Top Collection image"
                    className="object-cover group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="absolute w-full h-full top-0 left-0 overflow-hidden text-center">
                  <div className="relative h-full w-full group-hover:opacity-30 group-hover:bg-neutral-300 transition-all duration-300"></div>
                  <div>
                    <div className="h-full w-full flex flex-col justify-center items-center absolute top-0 left-0">
                      <h2 className="text-2xl md:text-4xl text-white font-medium font-serif transition-all duration-300">
                        BestSeller's
                      </h2>
                    </div>
                    <div className="absolute h-full w-full pb-10 group-hover:-translate-y-4 hidden group-hover:flex justify-center items-end top-0 left-0 transition-all duration-300">
                      <button className="px-8 py-2 bg-white border-1 border-white rounded-full hover:text-white hover:bg-transparent transition-all duration-300">
                        view All Products
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* top collections items 2 */}
              <div className="w-full h-full overflow-hidden relative group">
                <div className="h-full w-full object-center">
                  <img
                    src={Collection2}
                    alt="Top Collection image"
                    className="object-cover group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="absolute w-full h-full top-0 left-0 overflow-hidden text-center">
                  <div className="relative h-full w-full group-hover:opacity-30 group-hover:bg-neutral-300 transition-all duration-300"></div>
                  <div>
                    <div className="h-full w-full flex flex-col justify-center items-center absolute top-0 left-0">
                      <h2 className="text-2xl md:text-4xl text-white font-medium font-serif transition-all duration-300">
                        BestSeller's
                      </h2>
                    </div>
                    <div className="absolute h-full w-full pb-10 group-hover:-translate-y-4 hidden group-hover:flex justify-center items-end top-0 left-0 transition-all duration-300">
                      <button className="px-8 py-2 bg-white border-1 border-white rounded-full hover:text-white hover:bg-transparent transition-all duration-300">
                        view All Products
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* top collection item 3 */}
              <div className="w-full overflow-hidden relative group">
                <div className="h-full w-full">
                  <img
                    src={Collection3}
                    alt="Top Collection image"
                    className="object-cover group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                <div className="absolute w-full h-full top-0 left-0 overflow-hidden text-center">
                  <div className="relative h-full w-full group-hover:opacity-30 group-hover:bg-neutral-300 transition-all duration-300"></div>
                  <div>
                    <div className="h-full w-full flex flex-col justify-center items-center absolute top-0 left-0">
                      <h2 className="text-2xl md:text-4xl text-white font-medium font-serif transition-all duration-300">
                        BestSeller's
                      </h2>
                    </div>
                    <div className="absolute h-full w-full pb-10 group-hover:-translate-y-4 hidden group-hover:flex justify-center items-end top-0 left-0 transition-all duration-300">
                      <button className="px-8 py-2 bg-white border-1 border-white rounded-full hover:text-white hover:bg-transparent transition-all duration-300">
                        view All Products
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop the look */}
      <section className="w-full h-full">
        <div className="m-auto max-w-7xl">
          <div className="p-10 md:p-20">
            <div className="w-full h-full flex justify-between  flex-col-reverse lg:flex-row gap-5 md:gap-10">
              {/* left section */}
              <div className="w-full h-full lg:w-1/2 flex gap-5">
                <div className="h-full w-full ">
                  <img src={Look1} alt="Look 1 img" />
                </div>
                <div className="w-full m-auto text-center">
                  <img src={Look2} alt="look 2 img" />
                  <p className="text-sm  lg:text-base mt-4">
                    A head to toe shopping experience
                  </p>
                </div>
              </div>
              {/* Right section */}
              <div className="w-full h-full lg:w-1/2 ">
                <div className="w-full lg:w-1/2 lg:ml-20">
                  <div className="py-5">
                    <h3 className="text-3xl lg:text-6xl mb-3 lg:mb-5">
                      Shop The Look
                    </h3>
                    <p className="text-base">
                      Explore curated outfits to perfect your style
                      effortlessly.
                    </p>
                  </div>
                  <div className="h-full grid grid-cols-2 grid-rows-2 justify-between gap-5 ">
                    <div className="w-full h-full bg-cover">
                      <img
                        src={Look3}
                        alt="Look 3 image"
                        className="object-cover"
                      />
                    </div>
                    <div className="w-full h-full bg-cover">
                      <img
                        src={Look4}
                        alt="Look 3 image"
                        className="object-cover"
                      />
                    </div>
                    <div className="w-full h-full bg-cover">
                      <img
                        src={Look5}
                        alt="Look 3 image"
                        className="object-cover"
                      />
                    </div>
                    <div className="w-full h-full bg-cover">
                      <img
                        src={Look6}
                        alt="Look 3 image"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tesimonial Section */}
      <section className="w-full h-full bg-gray-200">
        <div className="p-10 md:p-20 m-auto">
          <div className="m-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="h-fit w-full md:w-1/2 lg:w-1/3 m-auto py-10 pr-20">
                <p className="uppercase mb-3">What clients are saying</p>
                <h4 className="text-3xl md:text-5xl">
                  Customer care is our priority
                </h4>
              </div>
              <div className="w-full md:w-1/2 lg:w-2/3 h-full m-auto ">
                <div className="flex justify-center items-center gap-10">
                  <div className="h-fit w-full p-10 bg-white">
                    <div>
                      <h2 className="text-2xl font-sans">
                        "{TestList[count].review}"
                      </h2>
                      <div className="flex items-center py-3">
                        {TestList[count].rating}
                      </div>
                      <div>
                        <strong>{TestList[count].name}.</strong> /{" "}
                        {TestList[count].place}
                      </div>
                    </div>
                  </div>
                  {/* if full screen show 2 revievs */}
                  <div className="hidden lg:block h-fit w-full p-10 bg-white">
                    <div>
                      <h2 className="text-2xl font-sans">
                        "{TestList[count + 1].review}"
                      </h2>
                      <div className="flex items-center py-3">
                        {TestList[count + 1].rating}
                      </div>
                      <div>
                        <strong>{TestList[count + 1].name}.</strong> /{" "}
                        {TestList[count + 1].place}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <button onClick={() => handlePrev()}>
                <GrPrevious />
              </button>
              <div>
                {TestList[count].id}/{TestList.length}
              </div>
              <button onClick={() => handleNext()}>
                <GrNext />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Read our arcticles Section */}
      <section className="w-full h-full">
        <div className="max-w-7xl m-auto">
          <div className="px-5 py-5 md:m-auto">
            <div className="py-4 md:py-8 text-3xl md:text-5xl text-center font-serif">
              <h2>Read our articles</h2>
            </div>
            <div className="py-5 m-auto">
              <div className="w-full h-full flex flex-col md:flex-row justify-center items-start gap-6 mb-10">
                <div className="w-full h-full md:w-1/2">
                  <div className="relative overflow-hidden group">
                    <div className="h-full w-full object-cover">
                      <img
                        src={Article1}
                        alt="Article image "
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:absolute md:h-full md:w-full md:opacity-30 md:bg-neutral-900 top-0 left-0"></div>
                    <div className="pt-2 md:absolute md:left-3 bottom-3 md:text-white">
                      <h3 className="text-base uppercase mb-2">Innovative</h3>
                      <p className="mb-2 text-xl font-serif ">
                        Discover our latest fashion trends – exclusively
                      </p>
                      <p className="md:text-base font-light">July 12, 2024</p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-center items-start gap-5">
                  <div className="m-auto h-fit w-full md:w-1/2 overflow-hidden">
                    <div className="h-full w-full object-cover">
                      <img
                        src={Article2}
                        alt="Article image "
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="pt-2">
                      <h3 className="text-base uppercase mb-2">Confidence</h3>
                      <p className="mb-2 text-xl font-serif ">
                        Find your perfect fit today – comfort
                      </p>
                      <p className="md:text-base font-light">Jun 18, 2024</p>
                    </div>
                  </div>

                  <div className="m-auto h-fit w-full md:w-1/2 overflow-hidden">
                    <div className="h-full w-full object-cover">
                      <img
                        src={Article3}
                        alt="Article image "
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="pt-2">
                      <h3 className="text-base uppercase mb-2">Essentials</h3>
                      <p className="mb-2 text-xl font-serif ">
                        Shop timeless pieces for every occasion
                      </p>
                      <p className="md:text-base font-light">May 5, 2024</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button className="py-2 px-8 border-1 rounded-full hover:bg-black hover:text-white transition-all duration-300">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* your favorites section */}
      <section className="w-full h-full">
        <div className="max-w-7xl m-auto">
          <div className="px-5 py-5 md:m-auto">
            <div className="w-full h-full relative md:py-10">
              <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12">
                <div className="p-4 w-full md:w-1/3">
                  <h2 className="text-2xl md:text-5xl tracking-widest font-normal font-serif mb-4">
                    Your favorites, now at discounts!
                  </h2>
                  <p className="md:text-base font-normal mb-8">
                    Grab your favorite styles now at unbeatable sale prices!
                  </p>

                  <div>
                    <button className="px-8 py-2 border-1 font-medium rounded-3xl bg-black text-white transition-all duration-300">
                      Shop Now
                    </button>
                  </div>
                </div>

                <div className="p-8 w-full h-full md:w-2/3 bg-gray-200 my-4">
                  <div className="relative flex items-center w-full gap-8">
                    <div className="w-full md:w-1/2">
                      <div className="w-full  overflow-hidden">
                        <img
                          src={Popular1}
                          alt="product-img"
                          className="object-cover w-full group-hover:scale-110 transition-all duration-300"
                        />
                      </div>
                      <div className=" py-5">
                        <h3 className="text-2xl mb-5">Ridge knit jacket</h3>
                        <p>
                          <span className="border-r-1 border-gray-200 pr-4 mr-4 uppercase tracking-wide">
                            Sport Jacket
                          </span>
                          <span className="font-semibold">$ 85</span>
                        </p>
                      </div>
                    </div>
                    <div className="object-center hidden md:block">
                      <img
                        src={Favorite1}
                        alt="favorite section image"
                        className="w-full  object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Follow us Section */}
      <section className="w-full h-full md:h-lvh bg-gray-200">
        <div className="m-auto p-10 h-full">
          <div className="h-full">
          <div className="h-full w-full flex justify-center items-center text-center">
            <div className="p-5 m-auto md:w-1/2 lg:w-1/3">
              <p className="uppercase text-base font-light mb-2 md:mb-5">Follow Us</p>
              <h2 className="text-2xl md:text-5xl mb-6 md:mb-10">WE're Ultras on Instagram</h2>
              <div>
                <button className="px-10 py-1 bg-white hover:bg-gray-100 border-1 rounded-full">Ultras</button>
              </div>
            </div>

          </div>
       </div>
        </div>

      </section>
    </>
  );
}

export default index;
