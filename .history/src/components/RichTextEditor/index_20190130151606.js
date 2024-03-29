import * as React from 'react'
import ReactDOM from 'react-dom'

import { Editor, EditorState } from 'draft-js'

const { useState } = React

export default function RichTextEditor () {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  return <Editor editorState={editorState} onChange={setEditorState} />
}

class MyEditor extends React.Component {
  constructor (props) {
    super(props)
    this.state = { editorState: EditorState.createEmpty() }
    this.onChange = editorState => this.setState({ editorState })
  }
  render () {
    return (
      <Editor editorState={this.state.editorState} onChange={this.onChange} />
    )
  }
}

ReactDOM.render(<MyEditor />, document.getElementById('container'))
