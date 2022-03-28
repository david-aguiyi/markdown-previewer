import React from 'react';
import './App.css';
import { marked } from "marked"
 
const initialState = `
  Hi Welcome to my Markdown Previewer. Created by David Aguiyi
  
  **Here you have a bolden text** or _italics_ **_even both_**
  # Heading 1
  ## Heading 2

  - Here you
  - list
  - items

  Click this [link](https://david-aguiyi.github.io/simple-calculator-app/) check out my calculator App
  
  This is my inline html code \`<div></div>\`

  >Block Quotes!

  \`\`\`
    let x = 1;
    let y = 2;
    let z = x + y
  \`\`\`
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `;

class App extends React.Component {
  state = { 
      text: initialState
    }

  handleChange = (event) => {
    this.setState({
      text: event.target.value 
    })
  }  

  render() {  
    const {text} = this.state;
    const markdown = marked(text, {breaks: true})
    return(
      <div className='App'>
        <div class="container-fluid">
          <h1 className="text-center" >Welcome to my Markdown Previewer</h1>
          <div>
            <div className="col-6 m-auto">
              <div className='editorheader container'><h5>Enter your markdown</h5></div>
                <textarea id='editor' className="form-control" value={text} onChange={this.handleChange}></textarea>
              </div>

              <div className="col-6" >
                <div className='previewheader container'><h5>Preview</h5></div>
                <div className="preview">
                <div dangerouslySetInnerHTML={{__html:markdown}} id="preview" />    
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
