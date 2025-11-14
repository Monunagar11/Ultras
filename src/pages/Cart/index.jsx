import React from 'react'
import { NavLink } from 'react-router-dom'

function index() {
  return (
    <>
        <section className='w-full h-fit'>
            <div className='max-w-7xl m-auto'>
                <div className='px-10 py-10'>
                    <div className=''>
                        <div className='mb-10 text-center'>
                            <div>
                                <h1 className='text-3xl md:text-6xl font-serif'>Your Cart</h1>
                            </div>
                            <div>
                                <p>Make changes to your cart before checkout.</p>
                            </div>


                        </div>
                        <div className='flex justify-between flex-col md:flex-row gap-10 md:gap-5'>
                            {/* table for cart  */}
                            <div className='w-full h-fit overflow-hidden'>
                                <table className='table-auto w-full mb-5'>
                                    <thead className='bg-orange-400'>
                                        <tr className=''>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Qut</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <div>
                                        Your cart is Empty
                                        <p>Add items to your cart</p>
                                    </div>
                                    {/* <tbody>
                                        
                                    </tbody> */}

                                </table>
                                <div className='flex justify-between'>
                                    <div>
                                        <NavLink> Go Back</NavLink>
                                    </div>
                                    <div>
                                        <NavLink >Continue Shopping </NavLink>
                                    </div>

                                </div>



                            </div>

                            {/* checkout details  */}
                            <div className='w-full md:w-2/5 '>
                                        <div className='mb-5 '>
                                            <div className='px-5 md:px-10 py-2 font-semibold bg-orange-300'>
                                                <h4>Checkout Details</h4>

                                            </div>
                                            <div className='flex justify-between items-center px-5 md:px-10 py-2 bg-orange-200'>
                                                <div className=' font-semibold '>
                                                    <h6 className='text-nowrap'>Cart Subtotal</h6>
                                                </div>
                                                <div>
                                                    <p>
                                                        $60
                                                    </p>
                                                </div>

                                            </div>
                                            <div className='flex justify-between items-center px-5 md:px-10 py-2 bg-orange-200'>
                                                <div className=' font-semibold'>
                                                    <h6 className='text-nowrap'>Grand total</h6>
                                                </div>
                                                <div>
                                                    <p>
                                                        $0
                                                    </p>
                                                </div>

                                            </div>

                                        </div>
                                        <div className='text-center bg-gray-600 text-white rounded-full'>
                                            <button className=' py-2 px-8'>Check Out</button>
                                        </div>
                                
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    </>
  )
}

export default index