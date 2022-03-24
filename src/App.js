const initialState = {
  
}

import React from 'react';

import './App.css';
import { marked } from "marked"
 

class App extends React.Component {
  state = {
      text: ''
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
              <textarea id='editor' className="form-control" value={text} onChange={this.handleChange}></textarea>
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
