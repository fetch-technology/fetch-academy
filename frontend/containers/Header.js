import * as React from 'react'
import { Link } from 'react-router-dom'
class Header extends React.Component {
  handleSignOut = () => {
    this.props.handleSignOut()
  }
  render() {
    if (this.props.isLoggedIn === false) {
      return (
        <div className='header text-center'>
          <h1 className='m-0'>Fetch Academy</h1>
        </div>
      )
    }
    return (
      <div>
        <div className='header py-4'>
          <div className='container'>
            <div className='d-flex'>
              <Link className='header-brand' to='./'>
                <img src='https://itviec.com/employers/fetch-technology-vietnam/logo/social/fetch-technology-vietnam-logo.png?VZtsiunoQVLaiSqZcL7Cs98F' className='header-brand-img' alt='tabler logo' />
              </Link>
              <div className='d-flex ml-auto'>
                <div className='dropdown'>
                  <Link to='#' className='nav-link pr-0 leading-none' data-toggle='dropdown'>
                    <span className='avatar'></span>
                    <span className='ml-2 d-none d-lg-block'>
                      <span className='text-default'>Jane Pearson</span>
                      <small className='text-muted d-block mt-1'>Administrator</small>
                    </span>
                    <button className="button1" onClick={this.handleSignOut}><i className="fe fe-power">Sign Out</i></button>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Header