
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/welcome/:name" component={WelcomeComponent} />
                        <Route path="/todos" component={ListTodosComponent} />
                        <Route component={ErrorComponent} />
                    </Switch>
                    <FooterComponent/>
                </Router>
            </div>
        );
    }
}



class WelcomeComponent extends Component {
    render() {
        return <div> welcome {this.props.match.params.name}. todo list <Link to="/todos"> List </Link>
            </div>
    }
}


class HeaderComponent extends Component {
    render() {
        return (
          //  <div> <hr/> header  </div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://www.linkedin.com/in/roynnizambrano/" className="navbar-brand" >linkedin</a></div>
                    <ul className="navbar-nav">
                        <li> <Link className="nav-link" to="/welcome"> Home </Link></li>
                        <li> <Link  className="nav-link"to="/todos"> Todos </Link> </li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li> <Link className="nav-link" to="/login"> Login </Link> </li>
                        <li> <Link className="nav-link" to="/logout"> Logout </Link></li>
                    </ul>
                </nav>
            </header>
            
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <div>
               <hr/> footer 
            </div>
        )
    }
}


function ErrorComponent() {
    {
        return <div>Error dummys</div>
    }
}


class ListTodosComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos:
                [
                    { id: 1, description: "Learn React 1" , done:false, targetDate: new Date()},
                    { id: 2, description: "Learn React 2", done:false, targetDate: new Date() },
                    { id: 3, description: "Learn React 3", done:false, targetDate: new Date() }
                ]
        }
    }


    render() {
        return <div>
            <h1>List Todos</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>description</th>
                        <th>target date</th>
                        <th>is completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.todos.map(
                            todo =>
                                <tr>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.targetDate.toString()}</td>
                                <td>{todo.done.toString()}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    }
}


class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "empty",
            password: "",
            hasLoginFailed: false,
            showSuccessMessage: false

        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)

    }

    render() {
        return (
            <div>
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Sucessful</div>}

                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                <button onClick={this.loginClicked}>Login</button>
            </div>

        )

    }


    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }


    loginClicked() {

        if (this.state.username === "test" && this.state.password === "dummy") {

            this.props.history.push(`/welcome/${this.state.username}`)
            //this.setState({ showSuccessMessage: true })
            //this.setState({ hasLoginFailed: false })

        } else {
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
        }

    }

}




export default TodoApp