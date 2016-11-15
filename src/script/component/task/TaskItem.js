import React from "react";
import { ListItem } from "material-ui/List";

export default ({task, onClick}) => {
  return <ListItem
           onClick={ onClick }
           primaryText={ task.name || "no title" } />
}