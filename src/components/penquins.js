import React from 'react';
import { Link } from 'react-router-dom';

const Penquin = () => (
    <div className="main container-fluid">
        <div className="page-header">
            <h1>Penquins</h1>
        </div>
            <Link to="/details"><img src={require('../images/penquins01.jpg')} className="photo" alt="penquin01"></img></Link>
            <Link to="/details"><img src={require('../images/penquins02.jpeg')} className="photo" alt="penquin02"></img></Link>
            <Link to="/details"><img src={require('../images/penquins03.jpg')} className="photo" alt="penquin03"></img></Link>
            <Link to="/details"><img src={require('../images/penquins04.jpg')} className="photo" alt="penquin04"></img></Link>
    </div>
);

export default Penquin;