import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  render() {
    return(
      <div>
        <h1>Welcome to React</h1>
        <div className="row">
          <div className="col-6">
            <textarea id='editor'></textarea>
          </div>
          <div className='col-6' id='previewer'>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
