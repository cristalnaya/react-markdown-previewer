import React, { Component } from 'react'
import marked from 'marked'

const markup = (a) => {
  return {__html: a}
}

class Preview extends Component {
 
  render() {
    return (
      <div id="preview-box">
        <h4 className="preview-heading">Preview</h4>
        <div dangerouslySetInnerHTML={markup(marked(this.props.userInput))} id="preview" />
      </div>
      )
  }
}

export default Preview;