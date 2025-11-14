import React from 'react'
import FeatureCollection from '../../components/ui/FeatureCollection';
import Collections from "../../components/ui/Collections";

import Popular1 from "../../assets/Images/popular-1.jpg";
import Popular2 from "../../assets/Images/popular-1-1.jpg";
import Popular3 from "../../assets/Images/popular-1-2.jpg";
import Popular4 from "../../assets/Images/popular-1-3.jpg";
import Popular5 from "../../assets/Images/popular-1-4.jpg";

import Premimum from "../../assets/Images/premimum-img.jpg";


function index() {
  return (
    <>
        {/* Product details  */}
        <section className='w-full h-fit'>
            <div className='max-w-7xl m-auto'>
                <div className='px-10 pt-20 pb-10'>
                    <div className='h-fit w-full flex flex-col md:flex-row justify-between flex-wrap '>
                        {/* product images */}
                        <div className='w-full md:w-3/5 h-fit pr-10'>
                        <div>
                            <div className='w-full h-fit flex justify-between items-start gap-5'>
                                <div className='flex flex-col items-center gap-2 md:gap-6 h-full'>
                                    {/* product images  */}
                                    <div className='max-h-35 max-w-35'>
                                        <img src={Popular1} alt="product images 1" className='object-cover h-full w-full'/>
                                    </div>
                                    <div className='max-h-35 max-w-35'>
                                        <img src={Popular2} alt="product images 2" className='object-cover h-full w-full'/>
                                    </div>
                                    <div className='max-h-35 max-w-35'>
                                        <img src={Popular3} alt="product images 3" className='object-cover h-full w-full'/>
                                    </div>
                                    <div className='max-h-35 max-w-35'>
                                        <img src={Popular4} alt="product images 4" className='object-cover h-full w-full'/>
                                    </div>
                                    <div className='max-h-35 max-w-35'>
                                        <img src={Popular5} alt="product images 5" className='object-cover h-full w-full'/>
                                    </div>

                                </div>
                                <div className=' h-full '>
                                    <div className='w-full h-full overflow-hidden object-center'>
                                        <img src={Popular1} alt="Product Main image"  className='object-contain'/>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* product details */}
                        <div className='w-full md:w-2/5 '>
                            <div>
                                {/* product name  */}
                                <div className='mb-5'>
                                    <h1 className='text-5xl font-serif'>Ridge knit jacket</h1>
                                </div>
                                {/* stock quantity */}
                                <div className='mb-5'>
                                    <p className='text-green-500'>12 in Stock</p>
                                </div>

                                {/* product discription */}
                                <div className='mb-5'>
                                    <p>
                                        Experience the perfect blend of style and comfort with the Ridge Knit Jacket. Designed with a modern fit, this versatile jacket features premium knit fabric for exceptional warmth and durability. Whether you're heading out for a casual outing or layering up for cooler days, the Ridge Knit Jacket is your go-to choice for effortless fashion.
                                    </p>
                                </div>
                                {/* product price  */}
                                <div className='mb-5 pb-5 border-b-2 border-gray-400'>
                                    <h3 className='text-3xl'>$84 
                                        <span className='line-through text-gray-500 ml-5 text-lg'>
                                            $94
                                        </span>
                                    </h3>
                                    
                                </div>
                                <div>

                                    {/* add to cart button */}
                                    <div className='w-full text-center rounded-full bg-black text-white'>
                                        <button className='uppercase py-2 text-base'>Add to Cart</button>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

        {/* featured collection */}
        <FeatureCollection />

        {/* Premimum sweater section */}
        <section className='w-full  bg-orange-200'>
            <div className='max-w-7xl m-auto'>
                <div className=''>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-10'>
                        <div className='w-full md:w-1/2 md:pr-40 '>
                            <div className='mb-5'>
                                <h2 className='text-5xl'>
                                    Premium sweater for peak performance
                                </h2>
                            </div>
                            <div className='mb-10'>
                                <p className='text-lg'>
                                    Crafted for style and functionality, this premium sweater offers unmatched comfort. Perfect for active or casual wear, it’s designed to keep you performing at your best.
                                </p>
                            </div>

                            <div className=''>
                                <button className='uppercase px-6 py-3 text-sm border-1 bg-black text-white rounded-full hover:bg-transparent hover:text-black transition-all duration-300'>Shop Now</button>
                            </div>

                        </div>
                        <div className='w-full md:w-1/2 h-full object-center'>
                            <img src={Premimum} alt="premimum image" className='object-cover'/>

                        </div>
                    </div>

                </div>

            </div>

        </section>

        {/* may also like suggesion products */}
        <section className='w-full h-fit'>
            <div className='max-w-7xl m-auto'>
                <div className='px-10 py-5'>
                    <div className='text-center'>
                        <h3 className='text-3xl md:text-4xl'>You may also like</h3>  
                    </div>
                    <div>
                        <Collections />
                    </div>

                </div>
            </div>

        </section>
    </>
  )
}

export default index