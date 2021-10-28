import React from "react";
import "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Toolbar = () => (
  <div className={styles.toolbar}>
    <ul className={styles.actions}>
      <li className={styles.item} />
      <li className={styles.item} />
      <li className={styles.item} />
    </ul>
    <div className={styles.searchContainer}>
      <input
        className={styles.search}
        type="search"
        defaultValue="#Swedish"
        placeholder="Type to search"
      />
      <button className={styles.searchBtn}>
        <FontAwesomeIcon icon="search" />
      </button>
    </div>
  </div>
);

export default Toolbar;
