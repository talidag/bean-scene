import "./Home.scss";
import Navbar from "../../components/molecules/Navbar/Navbar";
import Button from "../../components/atoms/Button/Button";

const Home = () => {
  return (
    <div className="home__container">
      <Navbar />
      <div className="home">
        <p className="home__intro">We’ve got your morning covered with</p>
        <h1 className="home__title">Coffee</h1>
        <p className="home__description">
          It is best to start your day with a cup of coffee. Discover the best
          flavours coffee you will ever have. We provide the best for our
          customers.
        </p>
        <div className="home__btn__container">
          <Button text={"Order Now"} className="home__btn" />
        </div>
      </div>
    </div>
  );
};

export default Home;
