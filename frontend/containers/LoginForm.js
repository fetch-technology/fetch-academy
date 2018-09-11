/* global gapi */

import * as React from 'react'
import { GoogleLoginButton } from "react-social-login-buttons";
import Header from './Header';
import { Redirect } from 'react-router-dom'


class LoginForm extends React.Component {

  handleSignIn = () => {
    this.props.handleSignIn()
  }
  render() {
    if (this.props.isLoggedIn === true) {
      <Redirect to="/"/>
    }
    return (
      <div className='page-single loginForm '>
        <div className='container'>
          <div className='row'>
            <div className='col col-login mx-auto'>
              {
                this.props.isLoggedIn === false && (
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