import React, { Component } from 'react';
import Identicon from 'identicon.js';
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
// import box from '../box.png'
import Logo from '../../assets/logo.jpg'
import './navbar.css'


class Navbar extends Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      toggleMenu: false
    }
  }

  render() {
    
    return (            
            <div className="navbar gradient__bg">
            <div className='navbar-logo'>
                <a
                    className="gradient__text"
                    href="https://www.linkedin.com/in/ibrahimbs/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={Logo} width="30" height="30" className="align-top mr-1" alt="Logo" />
                    INSPIRE AGENCY
                </a>
            </div>
            <div className="navbar-links">
            <div className='navbar-links_container'>
            <small id="account">
              <a target="_blank"
                 alt=""
                 className="text gradient__text"
                 rel="noopener noreferrer"
                 href={"https://etherscan.io/address/" + this.props.account}>
                {this.props.account ? this.props.account.substring(0,6) : '0x0'}...{this.props.account ? this.props.account.substring(38,42) : '0x0'}
              </a>
            </small>
            { this.props.account
              ? 
              <img
                  alt=""
                  className='ml-2'
                  width='30'
                  height='30'
                  src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                />
              : <span></span>
            }
            </div>
            <div className='navbar-connectW'>
              <button type='button'>Connect Wallet</button>
            </div>
            <div className='navbar-menu'>
            { this.state.toggleMenu
                ? <RiCloseLine className='gradient_text' size={27} onClick={() => this.setState({ toggleMenu: false })} />
                : <RiMenu3Line className='gradient_text' size={27} onClick={() => this.setState({ toggleMenu: true })} />
              }
              { this.state.toggleMenu && (
                <div className='navbar-menu_container scroll-up'>

                </div>
              )}
            </div>
            </div>
            </div>
        );
  }
}

export default Navbar;