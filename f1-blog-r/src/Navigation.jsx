import "./Navigation.scss";
import { useState, useEffect } from "react";

function Navigation() {
  const navigation = ["Home", "News", "Statistics", "Contacts"];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 820) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <navbar className={`navigation__container ${isScrolled ? "scrolled" : ""}`}>
      <div className="navigation__container--inner">
        <ul className="navigation__container--inner-content">
          {navigation.map((item, index) => (
            <li
              key={index}
              className="navigation__container--inner-content-block"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </navbar>
  );
}

export default Navigation;
