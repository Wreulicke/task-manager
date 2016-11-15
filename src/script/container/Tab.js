import React from "react";
export default ({items, style}) => {
  return <div
           className={ "tab" }
           style={ style }>
           { items }
         </div>
}