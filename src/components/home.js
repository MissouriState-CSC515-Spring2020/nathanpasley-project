import React from 'react';

const Home = () => (
    <div className="main container-fluid">
        <div className="page-header">
            <h1>Photo Gallery</h1>
        </div>
            <a href="/details"><img src={require('../images/Lizard.jpg')} className="photo" alt="lizard"></img></a>
            <a href="/details"><img src={require('../images/gumballs.jpg')} className="photo" alt="gumball"></img></a>
            <a href="/details"><img src={require('../images/penquins03.jpg')} className="photo" alt="penquin03"></img></a>
            <a href="/details"><img src={require('../images/parrot.jpg')} className="photo" alt="parrot"></img></a>
            <a href="/details"><img src={require('../images/Greece_Street.jpg')} className="photo" alt="greece"></img></a>
    </div>

);

export default Home;