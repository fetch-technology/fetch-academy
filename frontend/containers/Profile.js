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
                      <label className="form-label">Company</label>
                      <input type="text" className="form-control" placeholder="Company" value="" />
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
                      <label className="form-label">First Name</label>
                      <input type="text" className="form-control" placeholder="First Name" value="" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input type="text" className="form-control" placeholder="Last Name" value="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Address</label>
                      <input type="text" className="form-control" placeholder="Home Address" value="" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6">
                    <div className="form-group">
                      <label className="form-label">City</label>
                      <input type="text" className="form-control" placeholder="City" value="" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-0">
                      <label className="form-label">About Me</label>
                      <textarea rows="5" className="form-control" placeholder="Here can be your description" value="">
                      </textarea>>
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