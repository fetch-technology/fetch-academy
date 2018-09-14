import * as React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom'
export default class CourseOverview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    },
      this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
 
  render() {
    return (
      <div>
        {/* {this.state.modal ? (): ''} */}
        <div className='my-3 my-md-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='card card-profile'>
                  <div className='card-body '>
                    <h3 className='mb-3 text-center'>Lorem Ipsum</h3>
                    <p className='mb-4'>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                      been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                       a galley of type and scrambled it to make a type specimen a book.
                    </p>
                  </div>
                </div>
                <div className='card'>
                  <div className='card-body'>
                    <div className='media'>
                      <span className='avatar avatar-xxl mr-5' style={{ backgroundImage: 'url(./custom/8.jpg)' }}></span>
                      <div className='media-body'>
                        <h4 className='m-0'>Juan Hernandez</h4>
                        <p className='text-muted mb-0'>Webdeveloper</p>
                        <ul className='social-links list-inline mb-0 mt-2'>
                          <li className='list-inline-item'>
                            <a href='javascript:void(0)' title='Facebook' data-toggle='tooltip'><i className='fa fa-facebook'></i></a>
                          </li>
                          <li className='list-inline-item'>
                            <a href='javascript:void(0)' title='Twitter' data-toggle='tooltip'><i className='fa fa-twitter'></i></a>
                          </li>
                          <li className='list-inline-item'>
                            <a href='javascript:void(0)' title='1234567890' data-toggle='tooltip'><i className='fa fa-phone'></i></a>
                          </li>
                          <li className='list-inline-item'>
                            <a href='javascript:void(0)' title='@skypename' data-toggle='tooltip'><i className='fa fa-skype'></i></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='card-header'>
                    <h3 className='card-title'>Ask mentor about the lesson</h3>
                  </div>
                  <div className='card-body'>

                    <div className='row'>
                      <div className='col'>
                        <div className='form-group'>
                          <textarea className='form-control' rows='5'></textarea>
                        </div>
                      </div>
                    </div>

                    <div className='form-group d-flex justify-content-end'>
                      <button className='btn btn-secondary'>Ask </button>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='card-header'>
                    <h3 className='card-title'>Particitpants</h3>
                  </div>
                  <div className='card-body' onClick={this.toggle}>
                    <div className='media-object avatar avatar-md mr-2' style={{ backgroundImage: 'url(demo/faces/male/16.jpg)' }}></div>
                    <div className='media-object avatar avatar-md mr-2' style={{ backgroundImage: 'url(demo/faces/male/16.jpg)' }}></div>
                    <div className='media-object avatar avatar-md mr-2' style={{ backgroundImage: 'url(demo/faces/male/16.jpg)' }}></div>
                    <div className='media-object avatar avatar-md mr-2' style={{ backgroundImage: 'url(demo/faces/male/16.jpg)' }}></div>
                    <div className='media-object avatar avatar-md mr-2'>+3</div>
                  </div>
                </div>
              </div>
              <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Particitpants</ModalHeader>
                  <ModalBody>
                    <div className='media-object avatar avatar-md mr-4' style={{ backgroundImage: 'url(demo/faces/male/16.jpg)' }}></div>
                    <div className='media-object avatar avatar-md mr-4' style={{ backgroundImage: 'url(demo/faces/male/16.jpg)' }}></div>
                    <div className='media-object avatar avatar-md mr-4' style={{ backgroundImage: 'url(demo/faces/male/16.jpg)' }}></div>
                    <div className='media-object avatar avatar-md mr-4' style={{ backgroundImage: 'url(demo/faces/male/16.jpg)' }}></div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color='primary' onClick={this.toggle}>Do Something</Button>{' '}
                    <Button color='secondary' onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
              </div>

              <div className='col-lg-8'>

                <div className='card'>
                  <div className='card-header d-flex justify-content-end mb-5'>
                    <Link className='btn btn-primary btn-lg font-weight-bold text-uppercase' to='/courses/123/lessons/1'>Start course</Link>
                  </div>
                  <ul className='list-group card-list-group'>
                    <li className='list-group-item py-5'>
                      <div className='media'>
                        <div className='media-object avatar avatar-md mr-4' style={{ backgroundImage: 'url(demo/faces/male/16.jpg)' }}></div>
                        <div className='media-body'>
                          <div className='media-heading'>
                            <small className='float-right text-muted'>4 min</small>
                            <h5>Requirements</h5>
                          </div>
                          <div>
                            It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The point of
                             using Lorem Ipsum is that it has a more-or-less normal distribution
                              of letters, as opposed to using 'Content here, content here', making
                               it look like readable English. Many desktop publishing packages and
                                web page editors now use Lorem Ipsum as their default model text,
                                 and a search for 'lorem ipsum' will uncover many web sites still
                                 in their infancy. Various versions have evolved over the years,
                                 sometimes by accident, sometimes on purpose (injected humour and the like).
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className='list-group-item py-5'>
                      <div className='media'>
                        <div className='media-object avatar avatar-md mr-4' style={{ background: 'url(demo/faces/male/16.jpg)' }}></div>
                        <div className='media-body'>
                          <div className='media-heading'>
                            <small className='float-right text-muted'>12 min</small>
                            <h5>Goals</h5>
                          </div>
                          <div>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry
                            . Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book. It has survived not only five centuries, but
                            also the leap into electronic typesetting, remaining essentially unchanged.
                            sectetur adipiscing elit.
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
