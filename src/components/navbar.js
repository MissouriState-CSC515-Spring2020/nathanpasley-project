import React from 'react';

const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		    <a className="navbar-brand" href="/">Home</a>
		    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		    </button>
		
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Categories
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="/penquins">Penquins</a>
            <a className="dropdown-item" href="/monkeys">Monkeys</a>
            <a className="dropdown-item" href="/tigers">Tigers</a>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          </ul>
        </div>
	</nav>
);

export default NavBar;
