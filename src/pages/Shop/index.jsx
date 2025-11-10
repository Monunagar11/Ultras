import PageHero from "../../components/ui/PageHero";

import HeroShop from "../../assets/Images/shop-hero.png";
import Popular1 from "../../assets/Images/Popular-1.jpg";
import Popular2 from "../../assets/Images/popular-2.jpg";
import Popular3 from "../../assets/Images/popular-3.jpg";
import Popular4 from "../../assets/Images/popular-4.jpg";
import GridList from "../../components/ui/GridList";
import { useEffect, useState } from "react";

function index() {
    const [filterItems,setFilterItems] = useState([]);
  const heroData = {
    title: "Exclusive offer: 20% Off + free gift!",
    discription:
      "It’s our way of saying thank you for choosing us as your go-to destination for quality fashion.",
    image: HeroShop,
  };

  const ItemsList = [
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

  useEffect(()=>{
    setFilterItems(ItemsList)
  },[])

  const handleChange = () => {
    setFilterItems(()=>{
        ItemsList.filter((item)=>{
            item.type.replace(/\s+/g,'').toLowerCase == "sportjackets";
        })
    })
    
  };
  return (
    <>
      <PageHero data={heroData} />
      <section className="w-full h-fit">
        <div className="max-w-7xl m-auto">
          <div className="my-10 mx-10 m-auto py-10">
            <div className="flex flex-col md:flex-row justify-between gap-5">
              <aside className="w-full h-full md:w-1/4 md:sticky top-0">
                <div>
                  <h3 className="text-2xl font-serif">Filters :</h3>
                </div>
                <form onChange={() => handleChange}>
                    <fieldset>
                  <div className="my-4 py-2 border-b-1 ">
                    <h3>Availability :</h3>
                  </div>
                  <div className="my-2">
                    <div className="mb-3">
                      <input type="radio" name="instock" id="" />
                      <label htmlFor="instock">In Stock</label>
                    </div>
                    <div>
                      <input type="radio" name="OutofStock" id="" />
                      <label htmlFor="OutofStock">Out of Stock</label>
                    </div>
                  </div>
                    </fieldset>

                    <fieldset >
                  <div className="">
                    <div className="my-4 py-2 border-b-1 ">
                    <h3>Category :</h3>
                  </div>
                    <div className="mb-3">
                      <input type="radio" name="allproducts" id="" />
                      <label htmlFor="allproducts">All Products</label>
                    </div>

                    <div className="mb-3">
                      <input type="radio" name="sportjackets" id="" />
                      <label htmlFor="sportjackets">Sport Jackets</label>
                    </div>

                    <div className="mb-3">
                      <input type="radio" name="sweaters" id="" />
                      <label htmlFor="sweaters">Sweaters</label>
                    </div>

                    <div className="mb-3">
                      <input type="radio" name="Tshirts" id="" />
                      <label htmlFor="Tshirts">T-shirts</label>
                    </div>

                    <div className="mb-3">
                      <input type="radio" name="leggings" id="" />
                      <label htmlFor="leggings">Leggings</label>
                    </div>

                    <div className="mb-3">
                      <input type="radio" name="boots" id="" />
                      <label htmlFor="boots">Boots</label>
                    </div>

                    <div>
                      <input type="radio" name="costumeShoes" id="" />
                      <label htmlFor="costumeShoes">Costume Shoes</label>
                    </div>
                  </div>
                  </fieldset>
                </form>
              </aside>
              <div className="w-full md:3/4">
              <GridList List={filterItems} />
              <GridList List={ItemsList} />
              <GridList List={ItemsList} />


              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default index;
