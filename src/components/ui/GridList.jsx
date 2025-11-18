import React from "react";
import { NavLink } from "react-router-dom";

function GridList({ List }) {
  return (
    <ul className="grid grid-flow-row md:grid-cols-3 lg:grid-cols-4 gap-6 h-fit">
      {List.map((item, key) => (
        <li key={key} className="h-full group">
          <NavLink to={`/product/${item.id}`}>
          <div className="w-full h-full">
            <div className="w-full h-fit overflow-hidden">
              <img
                src={new URL(item.images[0], import.meta.url).href}
                alt="product-img"
                className="object-center w-full h-full group-hover:scale-110 transition-all duration-300"
              />
            </div>
            <div className=" py-5">
              <h3 className="text-2xl mb-5">{item.name}</h3>
              <p>
                <span className="border-r-1 border-gray-200 pr-4 mr-4 uppercase tracking-wide">
                  {item.category}
                </span>
          
                <span className="font-semibold">${item.price}</span>
              </p>
            </div>
          </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default GridList;
