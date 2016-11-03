import React from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Done from "material-ui/svg-icons/action/done";

import { ListItem } from "material-ui/List";
import TextField from "material-ui/TextField";
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tasks: []
    }
  }
  done(index) {
    const tasks = this.state.tasks.filter((_, i) => index !== i)
    this.setState({
      tasks
    })
  }
  add(task) {
    const tasks = this.state.tasks.concat(task)
    this.setState({
      tasks
    })
  }
  onEnter(e) {
    if (e.ctrlKey && e.key === "Enter") {
      this.add(e.target.value)
      e.target.value = ""
    }
  }
  render() {
    const tasks = this.state.tasks.map((task, i) => {
      return <ListItem
                       leftIcon={ <Done onClick={ () => this.done(i) } /> }
                       key={ i }
                       primaryText={ task } />
    })
    return <MuiThemeProvider muiTheme={ getMuiTheme() }>
             <div>
               <AppBar
                       iconElementLeft={ <span/> }
                       title="task manager" />
               <TextField
                          hintText="test"
                          onKeyDown={ ::this.onEnter } />
               <div>
                 { tasks }
               </div>
             </div>
           </MuiThemeProvider>
  }
}
export default App;