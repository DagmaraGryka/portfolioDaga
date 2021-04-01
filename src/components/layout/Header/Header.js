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
        <header  className='navbar '>
          <div className='layout'>
            <div>
              <Icon/>
            </div>
            <nav className="navigation">
              <NavLink className="nav" exact to='/'>Home</NavLink>
              <NavLink className="nav" exact to='/About'>About</NavLink>
              <NavLink className="nav" exact to='/Projects'>Projects</NavLink>
            </nav>
          </div>
        </header>
    );
  }
}

export default Header;
