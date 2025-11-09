import PageHero from "../../components/ui/PageHero";

import HeroShop from "../../assets/Images/shop-hero.png"

function index(){
    const heroData = {
            title: "Exclusive offer: 20% Off + free gift!",
            discription: "It’s our way of saying thank you for choosing us as your go-to destination for quality fashion.",
            image : HeroShop
        }
    return(
        <>
        <PageHero data={heroData} />
        </>
    )
}

export default index;