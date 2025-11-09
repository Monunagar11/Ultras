import PageHero from "../../components/ui/PageHero";

import HeroMens from "../../assets/Images/mens-hero.png"

function index(){
    const heroData = {
            title: "Men's",
            discription: "From classic staples to bold new trends—style built for him, crafted to last.",
            image : HeroMens
        }
    return(
        <>
        <PageHero data={heroData}/>
        </>
    )
}

export default index;
