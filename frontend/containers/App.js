import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Header'
import LoginForm from './LoginForm'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }
  componentDidMount() {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: "484720420395-s49nvjnouu75hh4vpnkimlvb63h4f2tn.apps.googleusercontent.com"
      }).then(() => {
        var auth2 = gapi.auth2.getAuthInstance()
        this.auth2 = auth2
        if (this.auth2.isSignedIn.get() === true) {
          this.setState({ isLoggedIn: true })
        }
      })
    })
  }
  handleSignIn = () => {
    if (this.auth2.isSignedIn.get() === false) {
      this.auth2.signIn().then((user) => {
        console.log(user)
        localStorage.setItem('token', 'login')
        this.setState({ isLoggedIn: true })
      })
    }
  }
  render() {
    return (
      <Router>
        <div>
          <Header {...this.state}/>
          <Route exact path='/' component={() =>
            (<LoginForm {...this.state} handleSignIn={this.handleSignIn} />)}
          >
          </Route>
        </div>
      </Router>
    )
  }
}

export default App;