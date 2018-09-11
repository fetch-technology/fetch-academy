import * as React from 'react'
import { ggAuth } from '../config'
export default class SignOut extends React.Component {
    componentDidMount() {
        if (ggAuth) {
            ggAuth.signOut().then(() => {
                this.props.history.push('/login')
            })
        }
        else {
            this.props.history.push('/login')
        }
    }
    render() {
        return (
            <div></div>
        )
    }
}