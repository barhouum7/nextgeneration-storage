import React, { Component } from 'react'
import Feature from '../../components/feature/Feature'
import './uploadfileform.css'


class UploadFileForm extends Component {
  render() {
    return (
    <div className="form-card section__margin" id="upload">
      <div className='form-card-feature'>
        <Feature />
      </div>
                  <form onSubmit={(event) => {
                    event.preventDefault()
                    const description = this.fileDescription.value
                    this.props.uploadFile(description)
                  }} >
                      <div className="form-group">
                        <br></br>
                          <input
                            id="fileDescription"
                            type="text"
                            ref={(input) => { this.fileDescription = input }}
                            className="form-control text-monospace"
                            placeholder="description..."
                            required />
                      </div>
                    <input type="file" onChange={this.props.captureFile} className="text-white text-monospace"/>
                    <button type="submit" className="btn-primary btn-block"><b>Upload!</b></button>
                  </form>
              </div>
  )
}
}

export default UploadFileForm