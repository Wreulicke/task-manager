import React from "react";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import Done from "material-ui/svg-icons/action/done";
import present from "./module/present";
import { ListItem } from "material-ui/List";
import TextField from "material-ui/TextField";
import storage from "localforage"
class App extends React.Component {
  constructor() {
    super()
    storage.getItem("tasks").then((tasks) => {
      tasks::present(() => this.setState({
        tasks
      }))
    })
    this.state = {
      tasks: []
    }
  }
  doneTask(index, isKeyOp) {
    const tasks = this.state.tasks.filter((_, i) => index !== i)
    storage.setItem("tasks", tasks)
    this.setState({
      tasks
    }, isKeyOp ? function() {
      const refs = this.refs[`task-${(index)}`]
      refs::present(() => refs.applyFocusState("keyboard-focused"))
    } : null)
  }
  addTask(task) {
    const tasks = this.state.tasks.concat(task)
    storage.setItem("tasks", tasks)
    this.setState({
      tasks
    })
  }
  onEnter(e) {
    if (e.ctrlKey && e.key === "Enter") {
      this.addTask(e.target.value)
      e.target.value = ""
    }
  }
  render() {
    const tasks = this.state.tasks.map((task, i) => {
      return <ListItem
               leftIcon={ <Done onClick={ () => this.doneTask(i) } /> }
               ref={ `task-${i}` }
               key={ i }
               onKeyDown={ (e) => {
                             if (e.key === "Enter") this.doneTask(i, true)
                           } }
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