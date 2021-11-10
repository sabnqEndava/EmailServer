import React, { useState, useContext, useEffect } from "react";
import Toolbar from "./components/toolbar";
import Sidebar from "./components/sidebar";
import Inbox from "./components/inbox";
import Message from "./components/message";
import io from "socket.io-client";
import styles from "./index.module.css";
import { AuthContext } from "../../auth/AuthContext";
import { getEmails } from "../../api/email";

export const MainView = (props) => {
  const [selectedEmail, setSelectedEmail] = useState({});
  const [emails, setEmails] = useState([]);
  const context = useContext(AuthContext);

  useEffect(() => {
    const newSocket = io(`http://localhost:4000`);
    newSocket.on("connect", () => {
      console.log("conectado");
    });
    newSocket.on(`message-${context.user.email}`, (data) => {
      console.log(`new mail:`, data);
      const test = { ...data };
      setEmails((prevEmails) => [...prevEmails, test]);
    });
    loadEmails(context.user.id, context.user.accessToken);
  }, []);

  const selectAnEmail = (id) => {
    setSelectedEmail(emails.find((email) => email._id === id));
  };
  const loadEmails = async (id, token) => {
    const emailsResponse = await getEmails(id, token);
    setEmails(emailsResponse.data.response);
  };
  return (
    <div className={`h-auto ${styles.window}`}>
      {/* <Toolbar /> */}
      <div className={styles.content}>
        <Sidebar {...props} />
        <Inbox emails={emails} selectAnEmail={selectAnEmail} />
        <Message email={selectedEmail} />
      </div>
    </div>
  );
};
