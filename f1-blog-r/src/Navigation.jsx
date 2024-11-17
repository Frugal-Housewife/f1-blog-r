import "./Navigation.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const navigation = [
    { name: "Home", path: "/" },
    { name: "News", path: "/news" },
    { name: "Statistics", path: "/statistics" },
    { name: "Contacts", path: "/contacts" },
  ];
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
              <Link className="link" to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </navbar>
  );
}

export default Navigation;
