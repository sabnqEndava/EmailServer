import React from "react";
import Toolbar from "./components/toolbar";
import Sidebar from "./components/sidebar";
import Inbox from "./components/inbox";
import Message from "./components/message";
import Overlay from "./components/overlay";
import "./index.module.css";

const App = () => (
  <div styleName="window" className="h-auto">
    {/* <Toolbar /> */}
    <div styleName="content">
      {/* <Overlay /> */}
      <Sidebar />
      <Inbox />
      <Message />
    </div>
  </div>
);

export default App;
