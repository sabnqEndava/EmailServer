import React, { useState } from "react";
import Toolbar from "./components/toolbar";
import Sidebar from "./components/sidebar";
import Inbox from "./components/inbox";
import Message from "./components/message";
// import { Overlay } from "./components/overlay";
import styles from "./index.module.css";
import { mockEmails } from "../../mocks/email";

export const MainView = (props) => {
  const [selectedEmail, setSelectedEmail] = useState(mockEmails[0]);
  const selectAnEmail = (id) => {
    setSelectedEmail(mockEmails.find((email) => email.id === id));
  };
  return (
    <div className={`h-auto ${styles.window}`}>
      {/* <Toolbar /> */}
      <div className={styles.content}>
        {/* <Overlay /> */}
        <Sidebar {...props} />
        <Inbox emails={mockEmails} selectAnEmail={selectAnEmail} />
        <Message email={selectedEmail} />
      </div>
    </div>
  );
};
