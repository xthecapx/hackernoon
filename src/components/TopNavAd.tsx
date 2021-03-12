import React from "react";

import styles from "./TopNavAd.module.scss";

const TopNavAd = () => {
  return (
    <div className={styles.TopNavAd}>
      <a href="#" target="_blank" rel="sponsored">
        <img
          src="https://hackernoon.com/images/img-8i133ho.png"
          alt="Particle ad"
        />
        {'Join 3500 Developers at Spectra March 17th'}
      </a>
    </div>
  );
};

export default TopNavAd;
