import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import reducer from "./redux/reducer";

import "./stylesheets/basic.css";
import "./stylesheets/color.css";
import "./stylesheets/messageLabel.css";
import { AppRouter } from "./routers/AppRouter";

library.add(fas, far);

let store = createStore(reducer);

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
