import { BsArrowRight } from "react-icons/bs";

function Footer(){
    return(
        <>
            <footer className="w-full h-fit bg-gray-100">
                <div className="px-5 py-12 md:px-10 md:py-25">
                    <div className="w-full flex lg:justify-center flex-col lg:flex-row lg:items-center">
                        {/* Subscribe & email */}
                        <div>
                            <h3>Subscribe to get 10% OFF</h3>
                            <p>Subscribe for store updates and discounts.</p>
                            <div className="relative inline-block">
                                <input type="text" placeholder="Email" className="w-full max-w-96 min-w-80 p-1 px-4 font-medium bg-white caret-blue-500 f rounded-full "/>
                                <div className="absolute text-center right-3 top-2">
                                    <BsArrowRight />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </footer>
        </>
    )
}

export default Footer;