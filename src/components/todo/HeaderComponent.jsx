
import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService.js';
import  {withRouter , Link}  from 'react-router-dom'

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return (
            //  <div> <hr/> header  </div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://www.linkedin.com/in/roynnizambrano/" className="navbar-brand" >linkedin</a></div>
                    <ul className="navbar-nav">
                        { isUserLoggedIn && <li> <Link className="nav-link" to="/welcome/userTest"> Home </Link></li>}
                        { isUserLoggedIn && <li> <Link className="nav-link" to="/todos"> Todos </Link> </li> }
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        { !isUserLoggedIn && <li> <Link className="nav-link" to="/login"> Login </Link> </li> }
                        { isUserLoggedIn &&  <li> <Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}> Logout </Link></li> }
                    </ul>
                </nav>
            </header>

        )
    }
}

export default withRouter(HeaderComponent)