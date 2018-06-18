import React, {Component} from 'react';
import './index.css';
import logo from '../../img/logo.png';

class Header extends Component{
    render(){
        return(
            <div className='header'>
                <img src={logo} className='logo' alt=''/>
            </div>
        );
    }
}

export default Header;