import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  state = {
      markdown: ''
    }

  handleChange = (event) => {
    this.setState({
      markdown: event.target.value
    })
  }  

  render() {  
    const { markdown } = this.state;

    return(
        <div class="container">
          <h1 className="text-center" >Welcome to React</h1>
          <div className="row">
            <h6>Enter your markdown</h6>
            <div className="col-6">
              <textarea id='editor' className="form-control" value={markdown} onChange={this.handleChange}></textarea>
            </div>
            <div className="col-6" id="preview">
              <h6>Your preview</h6>
              <div className="preview">
                  <p>See your preview</p>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default App;
