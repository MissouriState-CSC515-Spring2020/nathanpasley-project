import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="main container-fluid">
        <div className="page-header">
            <h1>Photo Gallery</h1>
        </div>
            <Link to="/details"><img src={require('../images/Lizard.jpg')} className="photo" alt="lizard"></img></Link>
            <Link to="/details"><img src={require('../images/gumballs.jpg')} className="photo" alt="gumball"></img></Link>
            <Link to="/details"><img src={require('../images/penquins03.jpg')} className="photo" alt="penquin03"></img></Link>
            <Link to="/details"><img src={require('../images/parrot.jpg')} className="photo" alt="parrot"></img></Link>
            <Link to="/details"><img src={require('../images/Greece_Street.jpg')} className="photo" alt="greece"></img></Link>
    </div>

);

export default Home;