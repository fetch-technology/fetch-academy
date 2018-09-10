/* global gapi */

import * as React from 'react'
import { GoogleLoginButton } from "react-social-login-buttons";
import Header from './Header';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }
  componentWillMount() {
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
      <div className='page-single loginForm '>
        <div className='container'>
          <div className='row'>
            <div className='col col-login mx-auto'>
              {
                this.state.isLoggedIn === false && (
                  <GoogleLoginButton onClick={this.handleSignIn}></GoogleLoginButton>
                )
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default LoginForm