import * as React from 'react'
import { Link } from 'react-router-dom'
import { ggAuth } from '../config'
class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { isLoading, toggle } = this.props
    if (isLoading || (!isLoading && !ggAuth.isSignedIn.get())) {
      return (
        <div className='header text-center'>
          <h1 className='m-0'>Fetch Academy</h1>
        </div>
      )
    }
    const user = ggAuth.currentUser.Ab.w3
    return (
      <div>
        <div className='header py-4'>
          <div className='container'>
            <div className='d-flex'>
              <Link className='header-brand' to='/'>
                <img src='https://forum.fetch.tech/uploads/default/original/1X/0976250120459f8d032523f089c0b7d416767031.png'
                className='header-brand-img' alt='tabler logo' />
              </Link>
              <div className='d-flex ml-auto'>
                <Link to='/profile' className='nav-link pr-0 leading-none' data-toggle='dropdown'>
                  <span className='avatar' style={{ backgroundImage: `url(${user.Paa})` }}></span>
                  <span className='ml-2 d-none d-lg-block'>
                    <span className='text-default'>{user.ig}</span>
                    <small className='text-muted d-block mt-1'>Administrator</small>
                  </span>
                </Link>
                <button className='ml-4 btn btn-danger' title='Sign Out' onClick={toggle}>
                  <i className='fe fe-power'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Header
