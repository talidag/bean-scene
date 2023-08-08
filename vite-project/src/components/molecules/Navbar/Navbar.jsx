import "./Navbar.scss";
import NavEl from "../../atoms/NavEl/NavEl";
import Button from "../../atoms/Button/Button";

const Navbar = () => {
  const links = ["Home", "Menu", "About Us", "Contact Us"];

  return (
    <nav>
      <a href="/">
        <p className="logo">Bean Scene</p>
      </a>
      <div className="links">
        {links.map((link, index) => (
          <NavEl link={link} key={index} className="link" />
        ))}
      </div>
      <div className="buttons">
        <button className="btn__si">Sign In</button>
        <Button text={"Sign Up"} fw={"medium"} />
      </div>
    </nav>
  );
};

export default Navbar;
