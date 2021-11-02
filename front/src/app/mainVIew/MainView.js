import React from "react";
import Toolbar from "./components/toolbar";
import Sidebar from "./components/sidebar";
import Inbox from "./components/inbox";
import Message from "./components/message";
// import { Overlay } from "./components/overlay";
import styles from "./index.module.css";

export const MainView = (props) => (
  <div className={`h-auto ${styles.window}`}>
    {/* <Toolbar /> */}
    <div className={styles.content}>
      {/* <Overlay /> */}
      <Sidebar {...props} />
      <Inbox />
      <Message />
    </div>
  </div>
);
