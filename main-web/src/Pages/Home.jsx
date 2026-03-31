import Banner from "../Components/Banner";
import Sponsored from "../Components/Sponsored";
import ScrollToTopButton from "../Components/ScrollToTopButton"
import Events from "../Components/Events";
import Contact from "../Components/Contact";
import AllGames from "../Components/AllGames";
import OurVision from "./OurVision";
import StatsPage from "./StatsPage";

const Home = () => {
  return (
    <>
    <ScrollToTopButton/>
    <Banner />
    <AllGames/>
     <Events/>
      <Sponsored />
     <StatsPage/>
       <OurVision/>
   
    <Contact/>
    </>
  );
};

export default Home;
