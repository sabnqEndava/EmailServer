import React, { useState, useContext, useEffect } from "react";
import Toolbar from "./components/toolbar";
import Sidebar from "./components/sidebar";
import Inbox from "./components/inbox";
import Message from "./components/message";
import io from "socket.io-client";
import { Overlay } from "./components/overlay";
import styles from "./index.module.css";
import { mockEmails } from "../../mocks/email";
import { AuthContext } from "../../auth/AuthContext";

export const MainView = (props) => {
  const [selectedEmail, setSelectedEmail] = useState(mockEmails[0]);
  const [state, setstate] = useState();
  const context = useContext(AuthContext);

  useEffect(() => {
    const newSocket = io(`http://localhost:4000`);
    newSocket.on("connect", () => {
      console.log("conecto");
    });
    newSocket.on(`message-${context.user.email}`, (data) => {
      console.log(`data`, data);
    });
  }, []);

  const selectAnEmail = (id) => {
    setSelectedEmail(mockEmails.find((email) => email.id === id));
  };
  return (
    <div className={`h-auto ${styles.window}`}>
      {/* <Toolbar /> */}
      <div className={styles.content}>
        <Overlay />
        <Sidebar {...props} />
        <Inbox emails={mockEmails} selectAnEmail={selectAnEmail} />
        <Message email={selectedEmail} />
      </div>
    </div>
  );
};
