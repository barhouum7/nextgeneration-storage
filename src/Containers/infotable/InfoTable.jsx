import React, { Component } from 'react'
import { convertBytes } from '../../components/Helpers';
import moment from 'moment'
import './infotable.css'

class InfoTable extends Component {
  render() {
  return (
    <div className='infoTable-content' id="stats">
              <table className="infoTable table-sm table-bordered">
                <thead style={{ 'fontSize': '15px' }}>
                  <tr className="bg-dark text-white">
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Uploader Name/Description</th>
                    <th scope="col">Type</th>
                    <th scope="col">Size</th>
                    <th scope="col">Date</th>
                    <th scope="col">Uploader/View</th>
                    <th scope="col">Hash/View/Get</th>
                  </tr>
                </thead>
                { this.props.files.map((file, key) => {
                  return(
                    <thead style={{ 'fontSize': '12px', 'color':'#fff' }} key={key}>
                      <tr>
                        <td>{file.fileId}</td>
                        <td>{file.fileName}</td>
                        <td>{file.fileDescription}</td>
                        <td>{file.fileType}</td>
                        <td>{convertBytes(file.fileSize)}</td>
                        <td>{moment.unix(file.uploadTime).format('h:mm:ss A M/D/Y')}</td>
                        <td>
                          <a
                            href={"https://goerli.etherscan.io/address/" + file.uploader}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.uploader.substring(0,10)}...
                          </a>
                        </td>
                        <td>
                          <a
                            href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                            rel="noopener noreferrer"
                            target="_blank">
                            {file.fileHash.substring(0,10)}...
                          </a>
                        </td>
                      </tr>
                    </thead>
                  )
                })}
              </table>
    </div>
  )
}
}

export default InfoTable