import React from "react";
import { render } from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import "./stylesheets/basic.css";
import "./stylesheets/color.css";
import "./stylesheets/messageLabel.css";
import { App } from "./App";

library.add(fas, far);

render(<App />, document.getElementById("root"));
