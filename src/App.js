import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import DisplayBios from './DisplayBios';
import AddDeveloper from './AddDeveloper';
import Developer from './Developer';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        developers:[
            new Developer(1,"Jason","Monroe","JavaScript",1999),
            new Developer(2,"Bill","Gates","BASIC",1965)
        ]
    }
  }

  addDeveloper = (developer) => {
    developer.id = this.state.developers.length+1;
    this.setState({
      developers:[...this.state.developers,developer]
    });
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React Now
          </a>
          <DisplayBios developers={this.state.developers}/>
          <AddDeveloper addDeveloper={this.addDeveloper}/>
        </header>
      </div>
    );
  }
}

export default App;
