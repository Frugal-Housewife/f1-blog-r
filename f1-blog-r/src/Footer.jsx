import "./Footer.scss";

function Footer() {
  return (
    <>
      <footer className="footer__container">
        <div className="footer__container--inner">
          <div className="footer__container--inner-copyright">
            All Rights Reserved @ {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
