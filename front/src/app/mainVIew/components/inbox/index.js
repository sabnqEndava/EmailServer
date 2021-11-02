import React, { useState } from "react";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const InboxItem = ({
  sender,
  title,
  content,
  date,
  labelClass,
  id,
  selectAnEmail,
}) => {
  return (
    <li className={styles.inboxItem} onClick={() => selectAnEmail(id)}>
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

const Inbox = (props) => {
  const [emails, setEmails] = useState(props.emails);

  return (
    <ul className={styles.inbox}>
      {emails.map((email) => {
        return (
          <InboxItem
            sender={email.sender}
            title={email.subject}
            content={email.summary}
            date={new Date(email.date).toLocaleDateString()}
            labelClass={styles.itemBlue}
            selectAnEmail={props.selectAnEmail}
            id={email.id}
          />
        );
      })}
    </ul>
  );
};

export default Inbox;
