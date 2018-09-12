import * as React from 'react'
import { Redirect } from 'react-router-dom'
import { ggAuth } from '../config'
import ExpandCourse from './ExpandCourse'

export default class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            expandList: false
        }
    }
    render() {
        const { isLoading } = this.props
        const { expandList } = this.state
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
            <div className="container mt-5">
                <div className='row'>
                    <div className="col-12">
                        <div className="card">
                            <div className="table-responsive">
                                <table className="table table-hover table-outline table-vcenter text-nowrap card-table">
                                    <thead>
                                        <tr>
                                            <th className="text-center w-1"><i className="icon-people"></i></th>
                                            <th>Course</th>
                                            <th>Activity</th>
                                            <th>Begin-End</th>
                                            <th>Progress</th>
                                        </tr>
                                    </thead>
                                    <tbody className="course">
                                        <tr onClick={() => this.setState({ expandList: !expandList })}>
                                            <td className="text-center" >
                                                <div className="avatar d-block" style={{ backgroundImage: `url(${user.Paa})` }}>
                                                    <span className="avatar-status bg-green"></span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>Python</div>
                                                <div className="small text-muted">
                                                    Mentor: Tung Dao
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
                                {
                                    expandList === true && (
                                        <ExpandCourse />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}