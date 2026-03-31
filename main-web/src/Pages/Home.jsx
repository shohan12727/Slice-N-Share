import Banner from "../Components/Banner";
import Sponsored from "../Components/Sponsored";
import ScrollToTopButton from "../Components/ScrollToTopButton"
import Events from "../Components/Events";
import Contact from "../Components/Contact";
import AllGames from "../Components/AllGames";
import OurVision from "./OurVision";

const Home = () => {
  return (
    <>
    <ScrollToTopButton/>
    <Banner />
    <AllGames/>
  
     <Events/>
       <OurVision/>
    <Sponsored />
    <Contact/>
    </>
  );
};

export default Home;
