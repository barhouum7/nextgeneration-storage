import React, { Component } from 'react'

import './infotable.css'
import SearchFunction from './SearchFunction';



class InfoTable extends Component {
  render() {
  return (
    <>
      <SearchFunction resultFiles={this.props.files} />
    </>
  )
}
}

export default InfoTable