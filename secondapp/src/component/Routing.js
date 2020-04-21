import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom';

import Home from './Home';
import Posts from './Post';
import Profile from './Profile';
import Lifecycle from './Lifecycle';
import PostDetails from './PostDetails';

const Routing = () => {
    return(
        <BrowserRouter>
        <header>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand">NareshIT</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/post">Post</Link></li>
                        <li><Link to="/profile/Profile Testing">Profile</Link></li>
                        <li><Link to="/lifecycle">Lifecycle</Link></li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
        <Route exact path="/" component={Home}/>
        <Route exact path="/post" component={Posts}/>
        <Route exact path="/post/:techtopic" component={PostDetails}/>
        <Route path="/profile/:topic" component={Profile}/>
        <Route path="/lifecycle" component={Lifecycle}/>
    </BrowserRouter>
    )
}

export default Routing;
   