import * as React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { ggAuth, API_URL, USER_ID } from '../config'
import { Modal } from 'reactstrap'

import Header from './Header'
import LoginForm from './LoginForm'
import HomePage from './HomePage'
import SignOut from './SignOut'
import CourseDetail from './CourseDetail'
import Profile from './Profile'
import CourseOverview from './CourseOverview';
import SignOutModal from '../components/SignOutModal';
import SendMail from "./SendMail"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      modal: false,
      userId: ''
    }
  }

  componentDidMount() {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: '484720420395-s49nvjnouu75hh4vpnkimlvb63h4f2tn.apps.googleusercontent.com'
      }).then(() => {
        ggAuth = gapi.auth2.getAuthInstance()
        this.setState({ isLoading: false })
      })
    })
  }

  toggleSignOutModal = () => {
    this.setState({ modal: !this.state.modal })
  }

  handleSignIn = () => {
    if (ggAuth.isSignedIn.get() === false) {
      ggAuth.signIn().then((info) => {
        fetch(`${API_URL}/profile/api/v1/login`, {
          method: 'POST',
          mode: 'cors',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'access_token': info.Zi.access_token
          }),
          credentials: 'include'
        })
          .then(res => res.json())
          .then(res => {
            USER_ID = res.id
            this.setState({ isLoading: false })
          })
      })
    }
  }

  render() {
    const { isLoading, modal } = this.state

    return (
      <Router>
        <div>
          <Header {...this.state} handleSignOut={this.handleSignOut} toggle={this.toggleSignOutModal} />
          <Route exact path='/' component={(props) => <HomePage {...this.state} isLoading={isLoading} {...props}></HomePage>} />
          <Route path='/login' component={() => (<LoginForm {...this.state} handleSignIn={this.handleSignIn} />)} />
          <Route path='/profile' component={(props) => <Profile isLoading={isLoading} isLoading={isLoading} {...props} />} />
          <Route path='/signout' component={(props) => <SignOut {...props} isLoading={isLoading}></SignOut>} />
          <Route exact path='/courses/:courseId/lessons/' component={(props) => <CourseDetail {...props} isLoading={isLoading}></CourseDetail>} />
          <Route path='/courses/:courseId/lessons/:lessonId' component={(props)=><CourseDetail {...props} isLoading= {isLoading}></CourseDetail>} />
          <Route exact path='/courses/:id' component={(props)=><CourseOverview {...props} isLoading= {isLoading}></CourseOverview>} />
          <Route path='/' component={(props) =>
            <SignOutModal toggle={this.toggleSignOutModal} modal={modal} {...props} isLoading= {isLoading}></SignOutModal>
          }></Route>
          <Route path="/email" component={(props)=><SendMail {...props} isLoading= {isLoading}></SendMail>}></Route>
        </div>
      </Router>
    )
  }
}

export default App;