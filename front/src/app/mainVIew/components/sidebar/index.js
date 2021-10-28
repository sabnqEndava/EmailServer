import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.css";

class Sidebar extends Component {
  render() {
    return (
      <aside className={styles.sidebar}>
        <nav>
          <button className={styles.compose} onClick={this.props.openOverlay}>
            <FontAwesomeIcon icon="pencil-alt" />
          </button>
          <ul className={styles.categories}>
            <li>
              <div className={styles.notification}>
                <span>5</span>
              </div>
              <FontAwesomeIcon
                icon="inbox"
                className={`${styles.icon} ${styles.iconIsActive}`}
              />
            </li>
            <li>
              <FontAwesomeIcon icon="star" className={styles.icon} />
            </li>
            <li>
              <FontAwesomeIcon icon="paper-plane" className={styles.icon} />
            </li>
            <li>
              <FontAwesomeIcon icon="trash-alt" className={styles.icon} />
            </li>
          </ul>
        </nav>
        <ul>
          <li className={styles.labelYellow} />
          <li className={styles.labelBlue} />
          <li className={styles.labelRed} />
          <li className={styles.labelGreen} />
        </ul>
        <div className={styles.userProfile}>
          <i className="fa fa-cog" />
          <i className="fa fa-sign-out" />
        </div>
      </aside>
    );
  }
}

export default connect(null, (dispatch) => {
  return {
    openOverlay: () => dispatch({ type: "OPEN_OVERLAY" }),
  };
})(Sidebar);
