import React from 'react';
import './App.css';
import { marked } from "marked"
 
const initialState = `
  # Hi Welcome to my Markdown Previewer
  ## Created by David Aguiyi

  - Hear will
  - Contain list
  - items

  [Visit this website to check out my calculator app](https://david-aguiyi.github.io/simple-calculator-app/)
  
  This is my inline \`<div></div>\`

  This is a block of code

  \`\`\`
    let x = 1;
    let y = 2;
    let z = x + y
  \`\`\`
  ![https://cdn-media-1.freecodecamp.org/images/1*Z3SfTvHOfvZiz1mr7uOODA.jpeg]
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
    const markdown = marked(text)
    return(
      <div className='App'>
        <div class="container">
          <h1 className="text-center" >Welcome to React</h1>
          <div className="row">
            <h6>Enter your markdown</h6>
            <div className="col-6">
              <textarea id='editor'  value={text} onChange={this.handleChange}></textarea>
            </div>

            <div className="col-6 m-auto" id="preview">
              <h6 className='text-center'>See the result</h6>
              <div className="preview rounded"
                  dangerouslySetInnerHTML={{__html:markdown}} />    
                <p>this is the previewer</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
