import React from 'react';
import '../../views/About/About'
import '../../views/HomePage/HomePage'
import '../../views/Projects/Projects'
import {NavLink} from 'react-router-dom'
import Icon from '../../common/Icon/Icon'
import './Header.scss';


class Header extends React.Component {
    render(){
      return ( 
        <header  className=' navbar '>
          <div className=' container layout'>
            <Icon/>

            <nav className="navigation">
              <NavLink exact to='/'>Home</NavLink>
              <NavLink exact to='/About'>About</NavLink>
              <NavLink exact to='/Projects'>Projects</NavLink>
            </nav>
          </div>
        </header>
    );
  }
}

export default Header;
