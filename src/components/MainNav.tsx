import React from "react";
import styles from "./MainNav.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MainNav = () => {
  return (
    <div className={styles.MainNav}>
      <a className={styles.Logo} href="/">
        <img src="https://hackernoon.com/hn-logo.png" alt="Hackernoon logo" />
      </a>

      <form className={styles.Search}>
        <input name="searchvalue" placeholder="Search..." />
        <img
          src="https://hackernoon.com/search-new.png"
          alt="Search icon"
          width="19"
          height="19"
        />
      </form>

      <div className={styles["Header__AuthButtons"]}>
        <a href="https://app.hackernoon.com/new" className="Button">
          {"Start Writing"}
        </a>
        <a className="Button Button__Transparent">Log in</a>
      </div>

      <button type="button" className={styles.DarkModeToggle}>
        <FontAwesomeIcon icon={['fas', 'sun']} />
      </button>
    </div>
  );
};

export default MainNav;
