import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom';
import Home from './Home';

const Routing = () => {
    return(
        <BrowserRouter>
        <header>
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                <a className="navbar-brand">NareshIT</a>
                </div>
                <ul className="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                </ul>
            </div>
            </nav>
        </header>
        <Route exact path="/" component={Home}/>
    </BrowserRouter>
    )
}

export default Routing;
   