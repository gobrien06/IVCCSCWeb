import React, { Component, Fragment } from 'react';
import './App.css';
import NavBar from './web/components/NavBar/NavBar.js';
import Header from './web/components/Header/Header.js';

class App extends Component {
  render() {
    return (
      <Fragment>
      <NavBar />
      <Header />
      </Fragment>
    );
  }
}

export default App;
