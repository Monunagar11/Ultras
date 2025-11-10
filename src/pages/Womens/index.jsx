import PageHero from "../../components/ui/PageHero";

import HeroWomens from "../../assets/Images/womens-hero.png"
import Collections from "../../components/ui/Collections";

function index(){
    const heroData = {
                title: "Women's",
                discription: "From classic staples to bold new trends—style built for him, crafted to last.",
                image : HeroWomens
            }
    return(
        <>
        <PageHero data={heroData}/>
        <Collections />
        </>
    )
}

export default index;