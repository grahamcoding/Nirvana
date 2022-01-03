import MainComponent from './components/MainComponent'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import * as React from "react";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <MainComponent />
    </div>
    </BrowserRouter>
  );
}

export default App;
