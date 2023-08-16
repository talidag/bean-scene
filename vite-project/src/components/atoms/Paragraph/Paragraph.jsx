import "./Paragraph.scss";

const Paragraph = ({ text, type }) => {
  return (
    <p className={`paragraph ${type === "white" && "paragraph--white"}`}>
      {text}
    </p>
  );
};

export default Paragraph;
