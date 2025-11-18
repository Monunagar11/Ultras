import React from 'react'
import { NavLink } from 'react-router-dom'
import GridList from './GridList';
import productList from '../../api/productList.json'

import Popular1 from "../../assets/Images/Popular-1.jpg";
import Popular2 from "../../assets/Images/popular-2.jpg";
import Popular3 from "../../assets/Images/popular-3.jpg";
import Popular4 from "../../assets/Images/popular-4.jpg";

function Collections() {
      const CollectionList = [
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
    <section className='h-fit w-full'>
        <div className='max-w-7xl m-auto'>
            <div className='px-10 py-10 md:px-20 md:py-25'>
                <div className='py-3 '>
                    <h2 className='text-4xl font-serif'>Collections :</h2>
                </div>
                <div className='w-full py-5 flex flex-wrap items-center gap-5'>
                    <button className='px-6 py-1 rounded-full uppercase text-base border-1 hover:bg-black hover:text-white transition-all duration-300'>
                        <NavLink to={''}>BestSeller's</NavLink>
                    </button>
                     <button className='px-6 py-1 rounded-full uppercase text-base border-1 hover:bg-black hover:text-white transition-all duration-300'>
                        <NavLink to={''}>Men's</NavLink>
                    </button>
                     <button className='px-6 py-1 rounded-full uppercase text-base border-1 hover:bg-black hover:text-white transition-all duration-300'>
                        <NavLink to={''}>Women's</NavLink>
                    </button>
                     <button className='px-6 py-1 rounded-full uppercase text-base border-1 hover:bg-black hover:text-white transition-all duration-300'>
                        <NavLink to={''}>New Arrivals</NavLink>
                    </button>
                     <button className='px-6 py-1 rounded-full uppercase text-base border-1 hover:bg-black hover:text-white transition-all duration-300'>
                        <NavLink to={''}>Style Essensials</NavLink>
                    </button>
                     <button className='px-6 py-1 rounded-full uppercase text-base border-1 hover:bg-black hover:text-white transition-all duration-300'>
                        <NavLink to={''}>Summer Collection</NavLink>
                    </button>
                </div>

                <GridList List={productList}/>

            </div>

        </div>

    </section>
  )
}

export default Collections