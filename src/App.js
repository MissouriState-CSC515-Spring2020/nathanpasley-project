import React from 'react';
import {lazy, Suspense} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import NavBar from './components/navbar';


const Home = lazy(() => import('./components/home'));
const Penquin = lazy(() => import('./components/penquins'));
const Monkey = lazy(() => import('./components/monkeys'));
const Tiger = lazy(() => import('./components/tigers'));


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Suspense fallback="{<>Loading</>}">
        <Route exact path="/" component={Home}/>
        <Route path="/penquins" component={Penquin}/>
        <Route path="/monkeys" component={Monkey}/>
        <Route path="/tigers" component={Tiger}/>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
