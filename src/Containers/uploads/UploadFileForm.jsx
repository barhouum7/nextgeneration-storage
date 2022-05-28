import React, { Component } from 'react'
// import Feature from '../../components/feature/Feature'
import './uploadfileform.css'


class UploadFileForm extends Component {
  render() {
    return (
    <div className="form-card section__margin" id="upload">
                  <form onSubmit={(event) => {
                    event.preventDefault()
                    const description = this.fileDescription.value
                    this.props.uploadFile(description)
                  }} >
                    <div className='form-content'>
                        <br></br>
                          <input
                            id="fileDescription"
                            type="text"
                            ref={(input) => { this.fileDescription = input }}
                            className="form-description"
                            placeholder="Enter your name with a brief description..."
                            required />
                      <input type="file" name="file" id="file" onChange={this.props.captureFile} className="inputfile"/>
                      <label for="file" className='btn-inputfile'>
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="upload"
                          class="svg-inline--fa fa-upload fa-w-16"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                          ></path>
                        </svg>
                        <span>Choose file...</span>
                      </label>
                      <div className='btn-upload__wrapper'>
                        <button type="submit" className="btn-upload">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span>Upload!</span>
                        </button>
                      </div>
                    </div>
                  </form>
              </div>
  )
}
}

export default UploadFileForm