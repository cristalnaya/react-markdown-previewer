import React, { Component } from 'react'

export default class Textarea extends Component {
  render() {
    const { onChange, userInput } = this.props;
    return (
      <div id="editor-box">
        <h4 className="editor-heading">Markdown Editor</h4>
        <textarea 
        type="text"
          onChange={onChange}
          value={userInput} 
          name="editor" 
          id="editor" 
          cols="60" rows="10" 
          />
      </div>
    )
  }
}
