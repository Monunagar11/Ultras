import React from "react";

function PageHero({ data }) {
  return (
    <>
      <section className="h-full w-full">
        <div className="max-w-7xl m-auto">
          <div className="md:px-10 md:py-15">
            <div className="md:pt-20 relative  overflow-hidden">
              <div className="bg-orange-100">
                <div className="p-5 md:p-10 w-full h-full m-auto ">
                  <div className="h-full w-full p-3 md:p-20 flex">
                    <div className="h-full w-full md:w-1/2">
                      <h1 className="text-3xl md:text-6xl font-serif mb-4 md:mb-8">
                        {data.title}
                      </h1>
                      <p className="text-base">{data.discription}</p>
                    </div>
                  </div>
                </div>
                <div className=" md:absolute inset-0 ">
                  <div className="flex md:justify-end h-full justify-center md:pr-20">
                    <img
                      src={data.image}
                      alt="Page hero image"
                      className="object-center object-contain h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PageHero;
