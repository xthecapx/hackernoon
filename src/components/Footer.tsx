import React from "react";

import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Share}>
        {"Share this story"}
        <div className={styles.SocialLinks}>
          <button aria-label="twitter" className={styles.ShareButton}>
            <img
              src="https://hackernoon.com/social-icons/twitter-new.png"
              alt="Twitter share icon"
            />
          </button>
          <button aria-label="facebook" className={styles.ShareButton}>
            <img
              src="https://hackernoon.com/social-icons/facebook-new.png"
              alt="Facebook share icon"
            />
          </button>
          <button aria-label="linkedin" className={styles.ShareButton}>
            <img
              src="https://hackernoon.com/social-icons/linkedin-new.png"
              alt="LinkedIn share icon"
            />
          </button>
          <button aria-label="email" className={styles.ShareButton}>
            <img
              className="email-icon"
              src="https://hackernoon.com/social-icons/email-new.png"
              alt="Email share icon"
            />
          </button>
        </div>
      </div>
      <div className={styles.AuthorAd}>
        <div className={styles.Profile__Layout}>
          <a href="#">
            <img
              src="https://hackernoon.com/images/541r0RExUOQ3nFAQs7oJuST9Axf2-842316b.jpeg"
              alt="Author profile picture"
              width="50"
              height="50"
            />
          </a>
          <div>
            <h3>
              <a href="#" className={styles.Link}>
                @codebucks
              </a>
              <small>CodeBucks</small>
            </h3>
          </div>
        </div>
        <a
          className={styles.ad}
          href="https://www.youtube.com/channel/UCeYt6blRBKuNrEg_-282fSA"
          rel="ugc"
        >
          <FontAwesomeIcon icon={faUserAstronaut} />
          to Learn ReactJS by building!
        </a>
      </div>
    </footer>
  );
};

export default Footer;
