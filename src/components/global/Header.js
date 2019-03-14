//dependences
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//assets
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {

  render() {

    //console.log(this.props);
    const { title , items } = this.props;

    return (
      <div className="Header">
        <header className="logo">
          <img src={logo} alt="logo" />
          <h3> { title } </h3>     
          <ul className="menu">
              { 
                items && items.map(
                  (item , key) => <li key={key}> <Link to={item.url}> {item.title}</Link></li>
                )
              }
          </ul>                
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  title : PropTypes.string.isRequired ,
  items : PropTypes.array.isRequired
};

export default Header;
