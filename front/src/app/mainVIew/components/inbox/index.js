import React, { useState } from "react";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mockEmails } from "../../../../mocks/email";
const InboxItem = ({ sender, title, content, date, labelClass }) => {
  return (
    <li className={styles.inboxItem}>
      <div className={styles.inboxSender}>
        <div className={styles.senderName}>{sender}</div>
        <div>
          <FontAwesomeIcon
            icon={["fas", "paperclip"]}
            className={styles.senderLabel}
          />
          <span className={styles.senderDate}>{date}</span>
        </div>
      </div>
      <div className={styles.inbox - title}>
        <div className={labelClass} />
        <div>{title}</div>
      </div>
      <p className={styles.inboxContent}>{content}</p>
    </li>
  );
};

const Inbox = () => {
  const [emails, setEmails] = useState(mockEmails);

  return (
    <ul className={styles.inbox}>
      {emails.map((email) => {
        console.log(email.body);
        return (
          <InboxItem
            sender={email.sender}
            title={email.subject}
            content={email.summary}
            date={new Date(email.date).toLocaleDateString()}
            labelClass={styles.itemBlue}
          />
        );
      })}
    </ul>
  );
};

export default Inbox;
