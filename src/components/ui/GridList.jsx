import React from "react";
import Product1 from "../../assets/Images/popular-1.jpg";
import Product2 from "../../assets/Images/popular-2.jpg";

function GridList({ List }) {
  return (
    <ul className="grid grid-flow-row md:grid-cols-3 lg:grid-cols-4 gap-12 w-full h-full">
      {List.map((item) => (
        <li className="h-full group">
          <div className="w-full h-full">
            <div className="w-full h-fit overflow-hidden">
              <img
                src={item.imageUrl}
                alt="product-img"
                className="object-center w-full h-full group-hover:scale-110 transition-all duration-300"
              />
            </div>
            <div className=" py-5">
              <h3 className="text-2xl mb-5">{item.title}</h3>
              <p>
                <span className="border-r-1 border-gray-200 pr-4 mr-4 uppercase tracking-wide">
                  {item.type}
                </span>
                <span className="font-semibold">${item.price}</span>
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default GridList;
