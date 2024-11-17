import "./Footer.scss";
import SocialMedia from "./SocialMedia";

function Footer() {
  return (
    <>
      <footer className="footer__container">
        <div className="footer__container--inner">
          <div className="footer__container--inner-social">
            <SocialMedia />
          </div>
          <div className="footer__container--inner-copyright">
            All Rights Reserved @ {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
