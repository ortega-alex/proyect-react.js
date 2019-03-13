//dependecies
import React, { Component } from 'react';

//component
import Header from './global/Header';
import Footer from './global/Footer';
import Content from './global/Content';

//data
import items from '../data/menu';

class App extends Component {
  render() {
    return (
      <div>
        <Header title="Codejobs"  items={items} />
        <Content />
        <Footer copyright="&copy; React 2019"/>       
      </div>
    );
  }
}

export default App;
