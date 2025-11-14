import ContactImg from "../../assets/Images/contact-form.png";

function index(){
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(e.target.value)
    }
    return(
        <>
            <section className="w-full h-fit">
                <div className="max-w-7xl m-auto">
                    <div className="mt-10 md:mt-20 p-10">
                        <div className="flex justify-center items-center">
                            <div className="text-center max-w-80">
                                <h1 className="mb-5 text-3xl md:text-6xl font-serif">Contact Us</h1>
                                <p>Have questions or feedback? Reach out to us by filling out the form below.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full h-fit">
                <div className="max-w-7xl m-auto">
                    <div className="md:m-10 bg-orange-200 relative overflow-hidden">
                        <div className="p-10 md:p-20 flex flex-col md:flex-row justify-between ">
                            <div className="w-full md:max-w-sm">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-5">
                                        <p>Feel free to message us with any questions or concerns.</p>
                                    </div>
                                    <div className="mb-5">
                                        <input type="text" name="fullname" placeholder="Full Name" className="px-4 py-2 text-lg bg-white rounded-full w-full"/>
                                    </div>

                                    <div className="mb-5">
                                        <input type="email" name="email" id="" placeholder="Email" className="px-4 py-2 text-lg bg-white rounded-full w-full"/>
                                    </div>

                                    <div className="mb-5">
                                       <input type="text" name="Message" id="" placeholder="Message" className="px-4 py-2 text-lg bg-white rounded-full w-full"/> 
                                    </div>

                                    <div>
                                        <button className="w-full px-4 py-3 bg-black text-white uppercase text-sm font-serif tracking-widest rounded-full ">Send</button>
                                    </div>
                                </form>

                                <div className="bg-white p-10 my-10">
                                    <address className="mb-5">
                                        <h4 className="font-serif font-medium">Address :</h4>
                                        <p>123 Oak Avenue <br />
                                            Sunnyvale, CA 94085</p>
                                    </address>
                                    <div className="mb-5">
                                        <h4 className="font-serif font-medium">Hours :</h4>
                                        <p>Monday - Friday: 10 AM - 6 PM</p>
                                        <p>Saturday - Sunday: 11 AM - 4 PM</p>
                                    </div>

                                    <div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="md:absolute inset-0 ">
                                <div className="flex justify-end h-full ">
                                <img src={ContactImg} alt="" className="object-contain"/>
                                </div>

                            </div>

                    </div>
                </div>

            </section>
        </>
    )
}

export default index;