import React from "react";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mockEmails } from "../../../../mocks/email";

const email = mockEmails[0];

const Message = () => (
  <div className={styles.message}>
    <div className={styles.info}>
      <div className={styles.from}>
        <img
          className={styles.image}
          src="https://avatars3.githubusercontent.com/u/6926451?s=460&v=4"
          alt="img"
        />
        <div className={styles.sender}>
          <div className={styles.senderName}>Jay Chung</div>
          <div>
            <span>{`To: `}</span>
            <span className={styles.senderEmail}>{email.receiver}</span>
          </div>
        </div>
      </div>
      <div>
        <FontAwesomeIcon icon={["fas", "reply"]} className={styles.icon} />
        <FontAwesomeIcon icon={["far", "star"]} className={styles.icon} />
        <FontAwesomeIcon icon={["far", "trash-alt"]} className={styles.icon} />
      </div>
    </div>
    <div className={styles.title}>{email.subject}</div>
    <p>{email.body}</p>
  </div>
);

export default Message;
