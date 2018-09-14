import * as React from 'react'
import { Redirect } from 'react-router-dom'
import { ggAuth, USER_ID, API_URL } from '../config'
import Courses from './ExpandCourse'

export default class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expandList: false,
      courses: []
    }
  }
  componentDidMount() {
    fetch(`${API_URL}/academy/api/v1/user_courses/2`, {
      mode: "cors",
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(res => {
        let getUserCourses = res.map(userInfo => {
          return userInfo
        })
        this.setState({ courses: getUserCourses })
      })

  }
  render() {
    const { isLoading } = this.props
    const { expandList, courses } = this.state
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
    const user = ggAuth.currentUser.Ab.w3
    return (
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-12'>
            {
              courses.length === 0 ? (
                <p>No courses available</p>
              ) : (
                  courses.map((infoCourse,i) => {
                    return (
                      <div className='card' key={i}>
                        <div className='table-responsive'>
                          <table className='table table-hover table-outline table-vcenter text-nowrap card-table'>
                            <thead>
                              <tr>
                                <th className='text-center w-1'><i className='icon-people'></i></th>
                                <th>Course</th>
                                <th>Goals</th>
                                <th>Begin-End</th>
                                <th>Progress</th>
                              </tr>
                            </thead>
                            <tbody className='course'>
                              <tr onClick={() => this.setState({ expandList: !expandList })}>
                                <td className='text-center' >
                                  <div className='avatar d-block' style={{ backgroundImage: `url(${user.Paa})` }}>
                                    <span className='avatar-status bg-green'></span>
                                  </div>
                                </td>
                                <td>
                                  <div>{infoCourse.course.title}</div>
                                  <div className='small text-muted'>
                                    Mentor: {infoCourse.mentor}
                                  </div>
                                </td>
                                <td>
                                  <small>{infoCourse.program.goal}</small>
                                </td>
                                <td>
                                  <small className='text-center'>{infoCourse.begin} - {infoCourse.end}</small>
                                </td>
                                <td>
                                  <div className='clearfix'>
                                    <div className='float-left'>
                                      <strong>42%</strong>
                                    </div>
                                  </div>
                                  <div className='progress progress-xs'>
                                    <div className='progress-bar bg-yellow' role='progressbar' style={{ 'width': '42%' }} aria-valuenow='42' aria-valuemin='0' aria-valuemax='100'></div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <Courses courseId={infoCourse.id} expanding={expandList} />
                        </div>
                      </div>
                    )
                  })
                )
            }
          </div>
        </div>
      </div>
    )
  }
}