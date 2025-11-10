import PageHero from "../../components/ui/PageHero";
import HeroArrivals from "../../assets/Images/new-arrival.png"
import Collections from "../../components/ui/Collections";

function index(){
    const heroData = {
        title: "New Arrival",
        discription: "Fresh drops just in—explore the latest must-haves before they’re gone.",
        image : HeroArrivals
    }
    return(
        <>
            <PageHero  data ={heroData}/>
            <Collections />
        </>
    )
}

export default index;