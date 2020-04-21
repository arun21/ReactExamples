  
import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const Post =() => {
    return(
        <Fragment>
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h2>Post Page</h2>
                </div>
                <div className="panel-body">
                    <div className="jumbotron">
                        <h2>Post Page</h2>
                        <div>
                            <h4>Java</h4>
                            <Link to="/post/Java">Java Details</Link>
                        </div>
                        <div>
                            <h4>Python</h4>
                            <Link to="/post/Java">Python Details</Link>
                        </div>
                        <div>
                            <h4>Ruby on Rails</h4>
                            <Link to="/post/Ruby on Rails">Ruby on Rails Details</Link>
                        </div>
                        <div>
                            <h4>Node JS</h4>
                            <Link to="/post/Node JS">Node JS Details</Link>
                        </div>
                        <div>
                            <h4>React JS</h4>
                            <Link to="/post/React JS">React JS Details</Link>
                        </div>
                        <div>
                            <h4>Angular</h4>
                            <Link to="/post/Angular">Angular Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Post;