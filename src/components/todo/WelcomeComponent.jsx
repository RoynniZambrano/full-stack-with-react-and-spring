
import React, { Component } from 'react';
import  {Link}  from 'react-router-dom'

class WelcomeComponent extends Component {
    render() {
        return <div className="container">
                <h1> Welcome! </h1>
                     welcome {this.props.match.params.name}. todo list <Link to="/todos"> List </Link>
                </div>
    }
}

export default WelcomeComponent