import React from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";

const App = () => (
  <MuiThemeProvider muiTheme={ getMuiTheme() }>
    <div>
      <AppBar
              iconElementLeft={ <span/> }
              title="task manager" />
    </div>
  </MuiThemeProvider>
);
export default App;