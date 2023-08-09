import "./index.scss";
import AboutUs from "./pages/AboutUs/AboutUs";
import Discover from "./pages/Discover/Discover";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Offer from "./pages/Offer/Offer";
import Subscribe from "./pages/Subscribe/Subscribe";
import Testimonials from "./pages/Testimonials/Testimonials";

const App = () => {
  return (
    <div className="app">
      <Home />
      <Discover />
      <Menu />
      <AboutUs />
      <Offer />
      <Testimonials />
      <Subscribe />
    </div>
  );
};

export default App;
