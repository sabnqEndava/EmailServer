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
          </ul>
        </nav>

        <div className={styles.userProfile}>
          <FontAwesomeIcon icon="sign-out-alt" className={styles.icon} />
        </div>
      </aside>
    );
  }
}

export default Sidebar;
// export default connect(null, (dispatch) => {
//   return {
//     openOverlay: () => dispatch({ type: "OPEN_OVERLAY" }),
//   };
// })(Sidebar);
