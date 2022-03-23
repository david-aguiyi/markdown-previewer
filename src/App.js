import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  state = {
    markdown: ''
  }
  render() {
    const { markdown } = this.state;

    handleChange = (e) => {
      this.setState({
        markdown: e.target.value
      })
    }  

    return(
      <div class="container">
        <h1>Welcome to React</h1>
        <div className="row">
          <div className="col-6">
            <textarea id='editor' value={markdown} onChange={this.handleChange}></textarea>
          </div>
          <div className='col-6' id='previewer'>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
