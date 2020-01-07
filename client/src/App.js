import React, { Component, Fragment } from 'react';
import './App.css';
import NavBar from './web/components/NavBar/NavBar.js';
import Header from './web/components/Header/Header.js';
import MissionLanding from './web/components/MissionLanding/MissionLanding';
import ImageLanding from './web/components/ImageLanding/ImageLanding';
import Footer from './web/components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
      <NavBar />
      <Header />
      <MissionLanding />
      <ImageLanding />
      <Footer />
      </Fragment>
    );
  }
}

export default App;
