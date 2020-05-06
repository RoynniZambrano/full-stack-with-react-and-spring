
import React, { Component } from 'react';
import  {Link}  from 'react-router-dom'

class WelcomeComponent extends Component {
    render() {
        return (
                <>
                    <h1> Welcome! </h1>
                    <div className="container">
                        welcome {this.props.match.params.name}.
                        todo list <Link to="/todos"> List </Link>
                    </div>
                </>
                )
    }
}

export default WelcomeComponent