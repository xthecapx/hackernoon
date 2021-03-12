import React from "react";

import styles from "./BottomReactions.module.scss";

const BottomReactions = () => {
  return (
    <div className={styles.BottomReactions}>
      <div className={styles.ReactionsLayout}>
        <div className={styles.Reactions}>
          <label>10</label>
          <div className={styles.emojis}>
            <div className={styles["emoji-container"]}>
              <img
                className={styles["emoji"]}
                src="https://hackernoon.com/emojis/heart.png"
              />
            </div>
            <div className={styles["emoji-container"]}>
              <img
                className={styles["emoji"]}
                src="https://hackernoon.com/emojis/light.png"
              />
            </div>
            <div className={styles["emoji-container"]}>
              <img
                className={styles["emoji"]}
                src="https://hackernoon.com/emojis/boat.png"
              />
            </div>
            <div className={styles["emoji-container"]}>
              <img
                className={styles["emoji"]}
                src="https://hackernoon.com/emojis/money.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomReactions;
