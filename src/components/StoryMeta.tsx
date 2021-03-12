import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./StoryMeta.module.scss";
import EmojiReactions from "./EmojiReactions";

const StoryMeta = () => {
  return (
    <div className={styles.StoryMetaLayout}>
      <div className={styles.StoryMeta}>
        <a className="date" href="#">
          {"February 21st 2021"}
        </a>
        <span className={styles.stat}>
          <FontAwesomeIcon icon={["fas", "star"]} />
          {"493 reads"}
        </span>
        <FontAwesomeIcon
          icon={["fas", "bookmark"]}
          className={styles.Bookmark}
        />
      </div>
      <EmojiReactions />
    </div>
  );
};

export default StoryMeta;
