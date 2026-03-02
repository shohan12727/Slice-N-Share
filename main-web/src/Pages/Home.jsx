import Banner from "../Components/Banner";
import Sponsored from "../Components/Sponsored";
import ScrollToTopButton from "../Components/ScrollToTopButton"
import Events from "../Components/Events";

const Home = () => {
  return (
    <>
    <ScrollToTopButton/>
    <Banner />
     <Events/>
    <Sponsored />
    </>
  );
};

export default Home;
