import React, { useContext } from "react";
import { AuthContext } from "../../../../auth/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.css";

const Sidebar = ({ history }) => {
  const { dispatch } = useContext(AuthContext);

  const signOut = () => {
    dispatch({
      type: "logout",
    });
    history.replace("/login");
  };

  return (
    <aside className={styles.sidebar}>
      <nav>
        <button className={styles.compose} onClick={() => {}}>
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
        <FontAwesomeIcon
          icon="sign-out-alt"
          className={styles.icon}
          onClick={signOut}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
// export default connect(null, (dispatch) => {
//   return {
//     openOverlay: () => dispatch({ type: "OPEN_OVERLAY" }),
//   };
// })(Sidebar);
