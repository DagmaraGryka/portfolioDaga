import React from 'react';
import '../../views/About/About'
import '../../views/HomePage/HomePage'
import '../../views/Contact/Contact'
import '../../views/Projects/Projects'
import {NavLink, Link} from 'react-router-dom'
import Icon from '../../common/Icon/Icon'


class Header extends React.Component {
    render(){
      return (
        <header>
          <div>
            <Link to='/'>
              <Icon/>
            </Link>

            <nav>
              <NavLink exact to='/'>Home</NavLink>
              <NavLink exact to='/About'>About</NavLink>
              <NavLink exact to='/Projects'>Projects</NavLink>
              <NavLink exact to='/Contact'>Contact</NavLink>
            </nav>
          </div>
        </header>
    );
  }
}

export default Header;
