import * as React from 'react'
import { ggAuth, API_URL } from '../config'
export default class SignOut extends React.Component {

  handleLogout() {
    fetch(`${API_URL}/profile/api/v1/logout`, {
      method: 'GET',
      credentials: 'include'
    })
  }
  componentDidMount() {
    this.handleLogout()
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