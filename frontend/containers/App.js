import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import LoginForm from './LoginForm'
import HomePage from './HomePage'
import SignOut from './SignOut'
import CourseDetail from './CourseDetail'
import { ggAuth } from '../config'
import Profile from './Profile'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
    }
  }
  componentDidMount() {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: "484720420395-s49nvjnouu75hh4vpnkimlvb63h4f2tn.apps.googleusercontent.com"
      }).then(() => {
        ggAuth = gapi.auth2.getAuthInstance()
        this.setState({ isLoading: false })
      })
    })
  }
  handleSignIn = () => {
    if (ggAuth.isSignedIn.get() === false) {
      ggAuth.signIn().then((info) => {
        this.setState({ isLoading: false })
      })
    }
  }
  render() {
    const { isLoading } = this.state
    return (
      <Router>
        <div>

          <Route path='/' component={(props) => <Header {...this.state} {...props} handleSignOut={this.handleSignOut} />}></Route>
          <Route exact path='/' component={(props) => <HomePage isLoading={isLoading} {...props}></HomePage>}></Route>
          <Route path='/login' component={() =>(<LoginForm {...this.state} handleSignIn={this.handleSignIn} />)}>
          </Route>
          <Route path='/profile' component={(props) => <Profile isLoading={isLoading} {...props} />} />
          <Route path='/signout' component={SignOut} />
          <Route path='/learn/a' component={CourseDetail}/>

        </div>
      </Router>
    )
  }
}

export default App;