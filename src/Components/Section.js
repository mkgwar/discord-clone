import "./Section.scss";

const Section = ({ title, desc, jc, bg, src }) => {
  return (
    <div className={"section " + jc + " " + bg}>
      <div className="section__text-content">
        <div className="section__title">{title}</div>
        <div className="section__desc">{desc}</div>
      </div>
      <img src={src} alt="section" />
    </div>
  );
};

export default Section;
