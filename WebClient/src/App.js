import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
import NavBar from './components/NavBar/NavBar';
import { Alert } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <Alert color="primary">
            This is a primary alert — check it out!
          </Alert>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Cool Site
          </p>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
