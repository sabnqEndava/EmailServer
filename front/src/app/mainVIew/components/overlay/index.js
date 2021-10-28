import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./index.module.css";

class Overlay extends Component {
  render() {
    return (
      <div
        styleName={
          this.props.overlayIsOpen
            ? `${styles.overlayActive}`
            : `${styles.overlay}`
        }
      >
        <div className={styles.modal}>
          <div className={styles.title}>
            New message
            <span className={styles.close} onClick={this.props.closeOverlay} />
          </div>
          <div className={styles.body}>
            <form className={styles.form}>
              <input type="text" placeholder="To" />
              <input type="text" placeholder="Subject" />
              <textarea name="message" rows="5" placeholder="Your text" />
              <div className={styles.button}>
                <button className={styles.btnVal}>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      overlayIsOpen: state.overlay,
    };
  },
  (dispatch) => {
    return {
      closeOverlay: () => dispatch({ type: "CLOSE_OVERLAY" }),
    };
  }
)(Overlay);
