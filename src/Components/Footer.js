import "./Footer.scss";
import data from "../FooterData.json";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__title">
          Imagine a<br /> Place
        </div>
        <div className="footer__links">
          {Object.keys(data).map((res, index) => {
            return (
              <div className="footer__list" key={index}>
                <div className="footer__linksTitle">{res}</div>
                {data[res].map((res, index) => {
                  return (
                    <a href="https://www.discord.com" key={index}>
                      {res}
                    </a>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
