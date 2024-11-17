import "./Contacts.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contacts() {
  return (
    <>
      <section className="contacts__container">
        <div className="contacts__container--inner">
          <div className="contacts__container--inner-block">
            <FontAwesomeIcon icon={faHome} size="6x" className="icon" />
            1234 Elm Street, Springfield IL, 62704 United States
          </div>
          <div className="contacts__container--inner-block">
            <FontAwesomeIcon icon={faPhone} size="6x" className="icon" />
            +1 (555) 123-4567
          </div>
          <div className="contacts__container--inner-block">
            <FontAwesomeIcon icon={faEnvelope} size="6x" className="icon" />
            johndoe@example.com
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacts;
