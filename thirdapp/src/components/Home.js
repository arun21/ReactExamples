
import React from 'react';


const Home =() => {
    return(
    <header>
    <div className="jumbotron text-center">
        <h1>Home Sweet Home</h1>
    </div>

    <div className="container">
        <div className="row">
            <div className="col-sm-4">
            <h3>Column 1</h3>
            <p>Lorem ipsum dolor..</p>
            </div>
            <div className="col-sm-4">
            <h3>Column 2</h3>
            <p>Lorem ipsum dolor..</p>
            </div>
            <div className="col-sm-4">
            <h3>Column 3</h3>
            <p>Lorem ipsum dolor..</p>
            </div>
        </div>
        <div className="panel-group">
        <div className="panel panel-danger">
            <div className="panel-heading">Home Description</div>
        <div className="panel-body">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </div>
        </div>
    </div>
    </div>
    </header>
)
}

export default Home;