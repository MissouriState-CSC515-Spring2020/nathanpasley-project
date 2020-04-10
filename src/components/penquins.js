import React from 'react';

const Penquin = () => (
    <div className="main container-fluid">
        <div className="page-header">
            <h1>Penquins</h1>
        </div>
            <a href="/details"><img src={require('../images/penquins01.jpg')} className="photo" alt="penquin01"></img></a>
            <a href="/details"><img src={require('../images/penquins02.jpeg')} className="photo" alt="penquin02"></img></a>
            <a href="/details"><img src={require('../images/penquins03.jpg')} className="photo" alt="penquin03"></img></a>
            <a href="/details"><img src={require('../images/penquins04.jpg')} className="photo" alt="penquin04"></img></a>
    </div>
);

export default Penquin;