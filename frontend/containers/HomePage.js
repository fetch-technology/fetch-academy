import * as React from 'react'
import { Redirect } from 'react-router-dom'
import { ggAuth, USER_ID, API_URL } from '../config'
import ExpandedCourses from './ExpandedCourse'
import * as dateFns from 'date-fns'


export default class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: []
    }
  }
  componentDidMount() {
    fetch(`${API_URL}/academy/api/v1/user-courses`, {
      mode: "cors",
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(res => {
        res = res.map(course => {
          return { ...course, expand: false }
        })
        this.setState({ courses: res })
      })

  }
  render() {
    const { isLoading } = this.props
    const { courses } = this.state
    if (isLoading) {
      return (
        <div>Loading</div>
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
                  courses.map((courseInfo, i) => {
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
                              <tr onClick={() => {
                                let newCourses = [].concat(courses)
                                let index = i
                                newCourses[index].expand = !newCourses[index].expand
                                this.setState({ courses: newCourses })
                              }}>
                                <td className='text-center' >
                                  <div className='avatar d-block' style={{ backgroundImage: `url(${user.Paa})` }}>
                                    <span className='avatar-status bg-green'></span>
                                  </div>
                                </td>
                                <td>
                                  <div>{courseInfo.title}</div>
                                  <div className='small text-muted'>
                                    Mentor: {courseInfo.mentor.email}
                                  </div>
                                </td>
                                <td>
                                  <small>{courseInfo.program.goal}</small>
                                </td>
                                <td>
                                  <small className='text-center'>
                                    {dateFns.format(courseInfo.begin, 'DD/MM/YYYY')} -
                                    {dateFns.format(courseInfo.end, 'DD/MM/YYYY')}
                                  </small>
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
                          <ExpandedCourses lessons={courseInfo.lessons} programId={courseInfo.program.id} courseId={courseInfo.id} expanding={courseInfo.expand} />
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