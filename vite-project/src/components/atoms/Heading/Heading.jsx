import "./Heading.scss";

const Header = ({ text, type }) => {
  return (
    <h1 className={`heading ${type === "white" && "heading--white"}`}>
      {text}
    </h1>
  );
};

export default Header;
