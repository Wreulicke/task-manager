import React from "react"
const dateKeys = ["year", "month", "day", "hour"]
export default ({task}) => {
  const detail = task.detail;
  const created = detail.created
  const info = dateKeys
    .map((key) => <div key={ key }>
                    { `${key}:${created[key]}` }
                  </div>)
  return <div className="detail">
           <h1 className="title">{ task.name }</h1>
           <div className="created">
             { info }
           </div>
         </div>
}