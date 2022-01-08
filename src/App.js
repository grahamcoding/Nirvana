import Main from './components/MainComponent'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';

/* Displays the Main Component (Page Layout/Router), Imports CSS to the page, establishes BrowserRouter for react-router-dom */

class App extends Component {
  render() {
      return (
          <BrowserRouter>
              <div className="App">
                  <Main />
              </div>
          </BrowserRouter>
      );
  };
}

export default App;