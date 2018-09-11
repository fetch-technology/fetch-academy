import * as React from 'react'
import { Redirect } from 'react-router-dom'
import { ggAuth } from '../config'
import { Link } from 'react-router-dom'

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
      <div className="container">
        <div className="col-12">
          <div className="card">
            <div className="table-responsive">
              <table className="table table-hover table-outline table-vcenter text-nowrap card-table">
                <thead>
                  <tr>
                    <th className="text-center w-1"><i className="icon-people"></i></th>
                    <th>User</th>
                    <th>Activity</th>
                    <th>Begin-End</th>
                    <th>Progress</th>
                  </tr>
                </thead>
                <tbody>
                  <tr onClick={() => { this.props.history.push('/courses/123') }}>
                    <td className="text-center" >
                      <div className="avatar d-block" style={{ backgroundImage: 'url(demo/faces/female/26.jpg)' }}>
                        <span className="avatar-status bg-green"></span>
                      </div>
                    </td>
                    <td>
                      <div>Elizabeth Martin</div>
                      <div className="small text-muted">
                        Registered: Mar 19, 2018
                              </div>
                    </td>
                    <td>
                      <div className="small text-muted">Last login</div>
                      <div>4 minutes ago</div>
                    </td>
                    <td>
                      <small className="text-center">Jun 11, 2015 - Jul 10, 2015</small>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>42%</strong>
                        </div>
                      </div>
                      <div className="progress progress-xs">
                        <div className="progress-bar bg-yellow" role="progressbar" style={{ "width": '42%' }} aria-valuenow="42" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}