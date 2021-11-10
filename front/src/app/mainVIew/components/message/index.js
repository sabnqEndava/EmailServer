import React from "react";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Message = (props) => {
  const { email } = props;
  return (
    <div className={styles.message}>
      <div className={styles.info}>
        <div className={styles.from}>
          <img
            className={styles.image}
            src="https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png"
            alt="img"
          />
          <div className={styles.sender}>
            <div className={styles.senderName}>From:{email.sender}</div>
            <div>
              <span>{`To: `}</span>
              <span className={styles.senderEmail}>{email.receiver}</span>
            </div>
          </div>
        </div>
        <div>
          <FontAwesomeIcon icon={["fas", "reply"]} className={styles.icon} />
          <FontAwesomeIcon icon={["far", "star"]} className={styles.icon} />
          <FontAwesomeIcon
            icon={["far", "trash-alt"]}
            className={styles.icon}
          />
        </div>
      </div>
      <div className={styles.title}>{email.subject}</div>
      <p>{email.body}</p>
    </div>
  );
};

export default Message;
