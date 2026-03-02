import Banner from "../Components/Banner";
import Sponsored from "../Components/Sponsored";
import ScrollToTopButton from "../Components/ScrollToTopButton"

const Home = () => {
  return (
    <>
    <ScrollToTopButton/>
      <Banner />
      <Sponsored />
    </>
  );
};

export default Home;
