import "./Section.scss";

const Section = ({ title, desc, url, jc, bg }) => {
  return (
    <div className={"section " + jc + " " + bg}>
      <div className="section__text-content">
        <div className="section__title">{title}</div>
        <div className="section__desc">{desc}</div>
      </div>
      <img url={url} alt="section" />
    </div>
  );
};

export default Section;
