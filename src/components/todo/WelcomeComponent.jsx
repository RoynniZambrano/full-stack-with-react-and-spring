
import React, { Component } from 'react';
import  {Link}  from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class WelcomeComponent extends Component {
    constructor(props){
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
        this.handleError = this.handleError.bind(this)
        this.state = {
            welcomeMessage: ''
        }
       
    }


    render() {
        return (
                <>
                    <h1> Welcome! </h1>
                    <div className="container">
                        welcome {this.props.match.params.name}.
                        todo list <Link to="/todos"> List </Link>
                    </div>
                    <div className="container">
                        welcome {this.props.match.params.name}.
                        todo list 
                        <button onClick= {this.retrieveWelcomeMessage} className = "btn btn-success" >get welcome message</button>
                    </div>
                    <div className="container">
                        {this.state.welcomeMessage}
                    </div>
                </>
                )
    }


    retrieveWelcomeMessage(){
        HelloWorldService.executeHelloWorldService()
        .then(response => this.handleSuccessfulResponse(response))
        .catch(error => this.handleError(error))
        
    }



    handleSuccessfulResponse(response){
        this.setState({welcomeMessage: response.data})

    }


    handleError(error){
        console.log(error.response)
    }

}


export default WelcomeComponent