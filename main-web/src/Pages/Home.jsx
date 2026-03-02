import Banner from "../Components/Banner";
import Sponsored from "../Components/Sponsored";
import ScrollToTopButton from "../Components/ScrollToTopButton"
import Events from "../Components/Events";
import Contact from "../Components/Contact";

const Home = () => {
  return (
    <>
    <ScrollToTopButton/>
    <Banner />
     <Events/>
    <Sponsored />
    <Contact/>
    </>
  );
};

export default Home;
