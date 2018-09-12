/* global gapi */

import * as React from 'react'
import { GoogleLoginButton } from 'react-social-login-buttons';
import { Redirect } from 'react-router-dom'
import {ggAuth} from '../config'

class LoginForm extends React.Component {

    handleSignIn = () => {
        this.props.handleSignIn()

    }
    render() {
        const {isLoading} = this.props
        if(isLoading){
            return (
                <div>
                    LOADING...
                </div>
            )
        }
        if (!isLoading && ggAuth.isSignedIn.get()){
            return(
                <Redirect to='/' />
            )
        }
        return (
            <div className='page-single loginForm '>
                <div className='container'>
                    <div className='row'>
                        <div className='col col-login mx-auto'>
                                <GoogleLoginButton onClick={this.handleSignIn}></GoogleLoginButton>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginForm