import * as React from 'react'
import { GoogleLoginButton } from "react-social-login-buttons";
class LoginForm extends React.Component {
    render() {
        return (
            <div className='page-single loginForm '>
                <div className='container'>
                    <div className='row'>
                        <div className='col col-login mx-auto'>
                            <GoogleLoginButton onClick={() => { alert('abc') }}></GoogleLoginButton>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginForm