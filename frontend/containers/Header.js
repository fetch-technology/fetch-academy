import * as React from 'react'
import { Link } from 'react-router-dom'
class Header extends React.Component {
  render() {
    if (localStorage.getItem('token') !== 'login') {
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
                <img src='../demo/brand/tabler.svg' className='header-brand-img' alt='tabler logo' />
              </Link>
              <div className='d-flex order-lg-2 ml-auto'>
                <div className='dropdown'>
                  <Link to='#' className='nav-link pr-0 leading-none' data-toggle='dropdown'>
                    <span className='avatar' >EXAM</span>
                    <span className='ml-2 d-none d-lg-block'>
                      <span className='text-default'>Jane Pearson</span>
                      <small className='text-muted d-block mt-1'>Administrator</small>
                    </span>
                  </Link>
                </div>
              </div>
              <Link to='#' className='header-toggler d-lg-none ml-3 ml-lg-0' data-toggle='collapse' data-target='#headerMenuCollapse' aria-expanded='true'>
                <span className='header-toggler-icon'></span>
              </Link>
            </div>
          </div>
        </div>
        <div className='header d-lg-flex p-0 collapse show' id='headerMenuCollapse'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg order-lg-first'>
                <ul className='nav nav-tabs border-0 flex-column flex-lg-row'>
                  <li className='nav-item'>
                    <Link to='./' className='nav-link'><i className='fe fe-home'></i> Home</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='#' className='nav-link' data-toggle='dropdown'>
                      <i className='fe fe-box'></i> Interface</Link>
                    <div className='dropdown-menu dropdown-menu-arrow'>
                      <Link to='#' className='dropdown-item '>Cards design</Link>
                      <Link to='#' className='dropdown-item '>Charts</Link>
                      <Link to='#' className='dropdown-item '>Pricing cards</Link>
                    </div>
                  </li>
                  <li className='nav-item dropdown'>
                    <Link to='#' className='nav-link' data-toggle='dropdown'><i className='fe fe-calendar'></i> Components</Link>
                    <div className='dropdown-menu dropdown-menu-arrow'>
                      <Link to='#' className='dropdown-item '>Maps</Link>
                      <Link to='#' className='dropdown-item '>Icons</Link>
                      <Link to='#' className='dropdown-item '>Store</Link>
                      <Link to='#' className='dropdown-item '>Blog</Link>
                      <Link to='#' className='dropdown-item '>Carousel</Link>
                    </div>
                  </li>
                  <li className='nav-item dropdown'>
                    <Link to='#' className='nav-link' data-toggle='dropdown'><i className='fe fe-file'></i> Pages</Link>
                    <div className='dropdown-menu dropdown-menu-arrow'>
                      <Link to='#' className='dropdown-item '>Profile</Link>
                      <Link to='#' className='dropdown-item '>Login</Link>
                      <Link to='#' className='dropdown-item '>Register</Link>
                      <Link to='#' className='dropdown-item '>Forgot password</Link>
                      <Link to='#' className='dropdown-item '>400 error</Link>
                      <Link to='#' className='dropdown-item '>401 error</Link>
                      <Link to='#' className='dropdown-item '>403 error</Link>
                      <Link to='#' className='dropdown-item '>404 error</Link>
                      <Link to='#' className='dropdown-item '>500 error</Link>
                      <Link to='#' className='dropdown-item '>503 error</Link>
                      <Link to='#' className='dropdown-item '>Email</Link>
                      <Link to='#' className='dropdown-item '>Empty page</Link>
                      <Link to='#' className='dropdown-item '>RTL mode</Link>
                    </div>
                  </li>
                  <li className='nav-item dropdown'>
                    <Link to='#' className='nav-link'><i className='fe fe-check-square'></i> Forms</Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='#' className='nav-link'><i className='fe fe-image'></i> Gallery</Link>
                  </li>

                  <li className='nav-item'>
                    <Link to='#' className='nav-link active'><i className='fe fe-file-text'></i> Documentation</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Header