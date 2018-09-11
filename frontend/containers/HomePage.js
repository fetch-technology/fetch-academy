import * as React from 'react'
import { Redirect } from 'react-router-dom'
import {ggAuth} from '../config'
export default class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { isLoading } = this.props
        if (isLoading) {
            return (
                <div>Loading
                </div>
            )
        }
        if (!isLoading && !ggAuth.isSignedIn.get()) {
            return (
                <Redirect to='/login' />
            )
        }
        return (
            <div>
                Done
            </div>
        )
    }
}