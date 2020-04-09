import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import NavBar from './components/navbar';
import Home from './components/home';
import Penquin from './components/penquins';
import Details from './components/details';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Route exact path="/" component={Home}/>
        <Route path="/penquins" component={Penquin}/>
        <Route path="/details" component={Details}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
