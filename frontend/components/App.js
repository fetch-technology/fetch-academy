import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from '../containers/Header'
import LoginForm from '../containers/LoginForm'
export default function App() {
    return (
        <Router>
            <div>
                <Header></Header>
                <Route exact path='/' component={LoginForm}></Route>
            </div>
        </Router>
    )
}