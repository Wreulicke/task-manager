import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import Application from "./script/app";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
injectTapEventPlugin();
darkBaseTheme.fontFamily = "'Source Code Pro', monospace"
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("container")
  ReactDOM.render(<MuiThemeProvider muiTheme={ getMuiTheme(darkBaseTheme) }>
                    <Application/>
                  </MuiThemeProvider>, app);
});