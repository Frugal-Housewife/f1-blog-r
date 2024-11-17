import "./SocialMedia.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialMedia() {
  return (
    <>
      <section className="socialmedia__container">
        <a href="">
          <FontAwesomeIcon icon={["fab", "facebook"]} size="3x" />
        </a>
        <a href="">
          <FontAwesomeIcon icon={["fab", "x-twitter"]} size="3x" />
        </a>
        <a href="">
          <FontAwesomeIcon icon={["fab", "instagram"]} size="3x" />
        </a>
        <a href="">
          <FontAwesomeIcon icon={["fab", "tiktok"]} size="3x" />
        </a>
      </section>
    </>
  );
}

export default SocialMedia;
