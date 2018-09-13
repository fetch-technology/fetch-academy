import * as React from 'react'

export default class SendMail extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container mx-auto">
        <div className="card m-5  ">
          <div className="card-header">
            <h3 className="card-title">Send mail :</h3>
          </div>
          <div className="card-body">
            <form action="">
              <div className="form-group">
                <div className="row align-items-center">
                  <label className="col-sm-2">To:</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row align-items-center">
                  <label className="col-sm-2">Subject:</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <textarea rows="13" className="form-control"></textarea>
              <div className="btn-list mt-4 text-right">
                <button type="button" className="btn btn-secondary btn-space">Cancel</button>
                <button type="submit" className="btn btn-primary btn-space">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}