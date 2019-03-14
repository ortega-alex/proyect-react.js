//dependecies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//component
import Header from './global/Header';
import Footer from './global/Footer';
import Content from './global/Content';

//data
import items from '../data/menu';

class App extends Component {
  
  render() {
    const { children } = this.props;

    return (
      <div>
        <Header title="Codejobs"  items={items} />
        <Content body={children} />
        <Footer copyright="&copy; React 2019"/>       
      </div>
    );
  }
}

App.propTypes = {
  children : PropTypes.object.isRequired
};

export default App;
