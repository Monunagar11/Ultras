import React from 'react'
import { BsQuestionCircle } from 'react-icons/bs'
import { HiOutlineWallet } from 'react-icons/hi2'
import { MdOutlineLocalShipping } from 'react-icons/md'
import { PiShoppingCartBold } from 'react-icons/pi'

function FeatureCollection() {
  return (
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
  )
}

export default FeatureCollection