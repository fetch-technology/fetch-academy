import * as React from 'react'
import { ggAuth } from '../config'

export default class Profile extends React.Component {

  render() {
    const { isLoading } = this.props
    if (isLoading || (!isLoading && !ggAuth.isSignedIn.get())) {
      return (
        <div className='header text-center'>
          <h1 className='m-0'>Loading...</h1>
        </div>
      )
    }

    const user = ggAuth.currentUser.Ab.w3
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="card-body1">
              <img className="card-profile-img" src={`${user.Paa}`} />
              <h3 className="mb-3">{user.ig}</h3>
              <p className="mb-4">
                Big belly rude boy, million dollar hustler. Unemployed. </p>
              <button className="btn btn-outline-primary btn-sm">
                <span v="fa fa-twitter"></span>
                Follow</button>
            </div>
          </div>
          <div className="col-9">
            <form className="card1">
              <div className="card-body">
                <h3 className="card-title">Profile</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Full Name</label>
                      <input type="text" className="form-control" placeholder="Full Name" value="" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="form-group">
                      <label className="form-label">Email address</label>
                      <input disabled className="form-control" placeholder="Email" value={user.U3} />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="form-group">
                      <label className="form-label">Team</label>
                      <input type="text" className="form-control" placeholder="Team" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="form-group">
                      <label className="form-label">Gender</label>
                      <select className="form-control">
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Date Of Birth</label>
                      <input type="date" className="form-control" value="" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input type="number" className="form-control" placeholder="Phone Number" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-0">
                      <label className="form-label">Link Facebook</label>
                      <input type="url" className="form-control" placeholder="Link Facebook" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-0">
                      <label className="form-label">Link Github</label>
                      <input type="url" className="form-control" placeholder="Link Github" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer text-right">
                <button type="submit" className="btn btn-primary">Update Profile</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}