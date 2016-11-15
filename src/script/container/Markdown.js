import React from "react"
import marked from "marked"
marked.setOptions({
  sanitize: true

});
const Markdown = (props) => <div dangerouslySetInnerHTML={ { "__html": marked(props.source || "# test") } } />;
export default Markdown