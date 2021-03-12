import React from "react";
import styles from "./SubNav.module.scss";

const SubNav = () => {
  return (
    <div className={styles.SubNav}>
      <ul className={styles.LinkList}>
        <li>
          <a href="#">{"Read"}</a>
        </li>
        <li className={styles.Sponsor}>
          <a href="#">{"Top Stories"}</a>
        </li>
        <li className={styles.Sponsor}>
          <a href="#">{"Write"}</a>
        </li>
        <li className={styles.Sponsor}>
          <a href="#">{"Listen"}</a>
        </li>
        <li>
          <a href="#">{"Learn"}</a>
        </li>
        <li className={styles.Sponsor}>
          <a href="#">{"Advertise"}</a>
        </li>
        <li>
          <a href="#">{"About"}</a>
        </li>
        <li>
          <a href="#">{"Tech Companies"}</a>
        </li>
        <li className={styles.Sponsor}>
          <a href="#">{"Careers"}</a>
        </li>
        <li className={styles.Sponsor}>
          <a href="#">{"Sloggins"}</a>
        </li>
      </ul>
    </div>
  );
};

export default SubNav;
