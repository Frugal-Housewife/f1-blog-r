import "./Hero.scss";
// import f1 from "./assets/f1.svg";
import b1 from "./assets/b1.svg";

function Hero() {
  return (
    <>
      <section className="hero__container">
        <img src={b1} alt="formula one logo" />
        <div className="hero__container--inner"></div>
      </section>
    </>
  );
}

export default Hero;
