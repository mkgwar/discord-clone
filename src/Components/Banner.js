import "./Banner.scss";
import bb from "../Assets/Banner_background.svg";
import bl from "../Assets/Banner_left.svg";
import br from "../Assets/Banner_right.svg";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__text-content">
        <div className="banner__title">IMAGINE A PLACE...</div>
        <div className="banner__desc">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </div>

        <button className="banner__button white">Download for Linux</button>
        <button className="banner__button black">
          Open Discord in your browser
        </button>
      </div>

      <img src={bb} alt="background" className="banner__bb" />
      <img src={bl} alt="background-left" className="banner__bl" />
      <img src={br} alt="background-right" className="banner__br" />
    </section>
  );
};

export default Banner;
