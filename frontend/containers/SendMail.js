import * as React from 'react'

export default class SendMail extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (

      <div className="container mt-4">
        <div className="row" >
          <div className="col-md-3">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Selection:</h3>
              </div>
              <div className="card-body ">
                <div className="mt-4">
                  <label className="h6" for="program_selection p-50">Program :</label>
                  <select className="form-control" id="program_selection">
                    <option className="" value="volvo">Intership Batch 1</option>
                    <option value="saab">Intership Batch 2</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label className="h6" for="program_selection">Course :</label>
                  <select className="form-control" id="program_selection">
                    <option value="volvo">Blockchain (Python)</option>
                    <option value="saab">BLockchain (NodeJS)</option>
                    <option value="saab">All</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label className="h6 mt-20" for="program_selection">Member :</label>
                  <select className="form-control" id="program_selection">
                    <option value="volvo">Person 1</option>
                    <option value="saab">Person 2</option>
                  </select>
                </div>
              </div>
              <div className="">
                <a href="#" className="btn btn-primary btn-block">Accept</a>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card ">
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
                  <textarea rows="7" className="form-control"></textarea>
                  <div className="btn-list mt-4 text-right">
                    <button type="button" className="btn btn-secondary btn-space">Cancel</button>
                    <button type="submit" className="btn btn-primary btn-space">Send message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}