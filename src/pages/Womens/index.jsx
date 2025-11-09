import PageHero from "../../components/ui/PageHero";

import HeroWomens from "../../assets/Images/womens-hero.png"

function index(){
    const heroData = {
                title: "Women's",
                discription: "From classic staples to bold new trends—style built for him, crafted to last.",
                image : HeroWomens
            }
    return(
        <>
        <PageHero data={heroData}/>
        </>
    )
}

export default index;