import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();
const Application=()=> <div>test</div>
document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Application/>, document.getElementById("container"));
});
