import React from 'react'
import './infotable.css'

import { convertBytes } from '../../components/Helpers';
import moment from 'moment'

const SearchFunction = (props) => {

return (
    <>
      <label className='search-div' htmlFor="search">
          <p>Search by File Characteristics:</p>
          <input className="search-bar" type="text" id="search" placeholder="Search for document.."></input>
          <i className='fa fa-search fa-lg'></i>
      </label>
    
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
                { props.resultFiles.map((data, key) => {
                  return(
                    <thead style={{ 'fontSize': '12px', 'color':'#fff' }} key={key}>
                      <tr>
                        <td>{data.fileId}</td>
                        <td>{data.fileName}</td>
                        <td>{data.fileDescription}</td>
                        <td>{data.fileType}</td>
                        <td>{convertBytes(data.fileSize)}</td>
                        <td>{moment.unix(data.uploadTime).format('h:mm:ss A M/D/Y')}</td>
                        <td>
                          <a
                            href={"https://goerli.etherscan.io/address/" + data.uploader}
                            rel="noopener noreferrer"
                            target="_blank">
                            {data.uploader.substring(0,10)}...
                          </a>
                        </td>
                        <td>
                          <a
                            href={"https://ipfs.infura.io/ipfs/" + data.fileHash}
                            rel="noopener noreferrer"
                            target="_blank">
                            {data.fileHash.substring(0,10)}...
                          </a>
                        </td>
                      </tr>
                    </thead>
                  )
                })
              }
              </table>
      </div>
    </>

)
}

export default SearchFunction