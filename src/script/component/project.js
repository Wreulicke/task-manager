import React from "react";
import TaskItem from "./task/TaskItem"
import Search from "material-ui/svg-icons/action/search";
import TextField from "material-ui/TextField";
import key from "../module/key"
import bind from "../module/bind"
const onEnter = key("Enter")
class Project extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      query: null
    }
  }
  updateQuery(e) {
    this.setState({
      query: e.target.value
    })
  }
  render() {
    const {project, selectTask, style, addTask} = this.props;
    let tasks = project.tasks;
    if (this.state.query) {
      tasks = tasks.filter(task => task.name.indexOf(this.state.query) !== -1)
    }
    const searchBox = <div className="flex-center">
                        <Search />
                        <TextField
                          style={ { width: "calc(100% - 24px)" } }
                          id="search"
                          onChange={ ::this.updateQuery }
                          hintText="search task" />
                      </div>

    const taskList = tasks
      .map((task, i) => <TaskItem
                          key={ i }
                          task={ task }
                          onClick={ selectTask::bind(task) } />)
    return <div style={ style }>
             { searchBox }
             <TextField
               style={ { width: "100%" } }
               id={ "addTask" }
               hintText="add task"
               onKeyDown={ addTask::onEnter } />
             { taskList }
           </div>
  }
}
export default Project