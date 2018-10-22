import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import {
  Route,
  Switch
} from 'react-router-dom';
import Header from './common/Header';
import Party from './filing/party/Party.js';
import logo from './logo.svg';
import './App.css';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

class App extends Component {
  render() {

	  return (
      <div className = "app">
        <div className = "app-top-box">
          <Header />
          <h2> Welcome message {this.props.name} </h2>
        </div>

        <div className = "app-body">
          Introduction information
          <Switch>
             <Route path="/party" component={Party}></Route>
          </Switch>

        </div>

      </div>
    );

//	 ReactDOM.render(<App name="Varun" />, mountNode); -->

 }



  render1() {
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
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
