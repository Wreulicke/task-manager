import React from "react"
import Project from "./component/project"
import TaskDetail from "./component/task/TaskDetail"
import created from "./module/create"
import Tab from "./container/Tab"
import Add from "material-ui/svg-icons/content/add"
import { ListItem } from "material-ui/List"
import TextField from "material-ui/TextField";
import key from "./module/key"
import present from "./module/present"

import bind from "./module/bind"
const onEnter = key("Enter")
// TODO modified to localforage
import projects from "./test/projects"
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      projects: projects,
      selectedProject: projects[0],
      selectedTask: null,
      mode: "init"
    }
  }
  selectProject(project) {
    this.setState({
      selectedProject: project,
      selectedTask: null
    })
  }
  changeMode(mode) {
    this.setState({
      mode: mode
    }, () => this.refs.projectName.input::present((node) => node.focus())
    )
  }
  selectTask(task) {
    this.setState({
      selectedTask: task
    })
  }
  addProject(e) {
    const newProject = {
      name: e.target.value,
      tasks: []
    }
    const projects = [newProject].concat(this.state.projects)
    this.setState({
      projects,
      selectedProject: newProject,
      mode: "init"
    })
    e.target.value = ""
  }
  addTask(e) {
    const taskName = e.target.value
    this.state.selectedProject.tasks.push({
      name: taskName,
      detail: {
        created: created()
      }
    })
    this.setState({
      ...this.state
    })
    e.target.value = ""
  }
  unselectNewProject() {
    this.setState({
      mode: "init"
    })
  }
  render() {
    const selectedTask = this.state.selectedTask
    const detail = (selectedTask) ?
      <TaskDetail task={ selectedTask } /> : null
    const selectedStyle = (p) => {
      return p === this.state.selectedProject ? {
        backgroundColor: "#4d4d4d"
      } : null
    }
    const projectList = this.state.projects
      .map((p, index) => <ListItem
                           style={ selectedStyle(p) }
                           innerDivStyle={ { padding: "10px 20px" } }
                           key={ index }
                           onClick={ ::this.selectProject::bind(p) }>
                           { p.name }
                         </ListItem>)
    const newProject = <TextField
                         style={ { display: this.state.mode === "add" ? "" : "none", padding: "0 5px" } }
                         id="projectName"
                         ref="projectName"
                         onBlur={ ::this.unselectNewProject }
                         onKeyDown={ ::this.addProject::onEnter }
                         hintText="add project" />
    const projectTab = <div className="flex-center">
                         <Tab
                           style={ { width: "calc(100% - 24px)" } }
                           items={ projectList } />
                         <Add
                           style={ { display: this.state.mode === "add" ? "none" : "" } }
                           onClick={ ::this.changeMode::bind("add") } />
                         { newProject }
                       </div>
    return <div className={ "app" }>
             <div className="left">
               { projectTab }
               <Project
                 project={ this.state.selectedProject }
                 selectTask={ ::this.selectTask }
                 addTask={ ::this.addTask } />
             </div>
             { detail }
           </div>
  }
}
export default App;