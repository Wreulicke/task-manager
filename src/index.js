import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import Application from "./script/app";
injectTapEventPlugin();

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Application/>, document.getElementById("container"));
});