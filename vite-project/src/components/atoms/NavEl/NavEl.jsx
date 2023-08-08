import "./NavEl.scss";

const NavEl = ({ link }) => {
  return (
    <a href={`/${link.toLowerCase()}`} className="anchor">
      {link}
    </a>
  );
};

export default NavEl;
