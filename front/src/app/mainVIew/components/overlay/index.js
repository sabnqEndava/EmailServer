import React, { useContext, useEffect } from "react";
import { OverlayContext } from "../../../../redux/reducer/index";
import styles from "./index.module.css";

export const Overlay = (props) => {
  const { value, dispatchOverlay } = useContext(OverlayContext);
  useEffect(() => {
    console.log(`value`, value);
  }, []);

  const deactivateOverlay = () => {
    dispatchOverlay({
      type: "CLOSE_OVERLAY",
    });
  };
  return (
    <div className={value ? `${styles.overlayActive}` : `${styles.overlay}`}>
      <div className={styles.modal}>
        <div className={styles.title}>
          New message
          <span className={styles.close} onClick={deactivateOverlay} />
        </div>
        <div className={styles.body}>
          <form className={styles.form}>
            <input type="text" placeholder="To" />
            <input type="text" placeholder="Subject" />
            <textarea name="message" rows="5" placeholder="Your text" />
            <div className={styles.button}>
              <button className={styles.btnVal}>Send</button>
              <button className={styles.btnVal} onClick={deactivateOverlay}>
                Cerrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// export default connect(
//   (state) => {
//     return {
//       overlayIsOpen: state.overlay,
//     };
//   },
//   (dispatch) => {
//     return {
//       closeOverlay: () => dispatch({ type: "CLOSE_OVERLAY" }),
//     };
//   }
// )(Overlay);
