import React from 'react';

const Details = () => (
    <div class="main container-fluid">
        <div class="page-header">
            <h1>Details</h1>
        </div>
        <div class="row overflow-wrap" id="main">
        <img src={require('../images/parrot.jpg')} className="photo" alt="parrot"></img>
        </div>
    </div>
);

export default Details;