import React from "react";
import styles from "./Profile.module.scss";

const Profile = () => {
  return (
    <div className={styles.Profile}>
      <a href="/u/codebucks">
        <img
          src="https://hackernoon.com/images/541r0RExUOQ3nFAQs7oJuST9Axf2-842316b.jpeg"
          alt="Author profile picture"
          width="50"
          height="50"
        />
      </a>
      <h3>
        <a href="/u/codebucks" className={styles.Link}>
          codebucks
        </a>
        <small>CodeBucks</small>
      </h3>
      <p>
        {
          "Helping you to learn code! here you'll find tutorials around web development. Keep Coding...😜"
        }
      </p>
      <div className={styles.SocialLinks}>
        <a href="https://twitter.com/code_bucks" target="_blank">
          <img
            src="https://hackernoon.com/social-icons/twitter-new.png"
            alt="Twitter social icon"
            width="20"
            height="20"
          />
        </a>
        <a href="https://github.com/codebucks27" target="_blank">
          <img
            src="https://hackernoon.com/social-icons/github-new.png"
            alt="github social icon"
            width="20"
            height="20"
          />
        </a>
      </div>
    </div>
  );
};

export default Profile;
