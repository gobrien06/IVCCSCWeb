import React, { Component } from 'react';
import FeaturedCard from "./FeaturedCard/FeaturedCard.js";
import SlideShow from "./SlideShow/SlideShow.js";
import './Header.css';

export default class Header extends Component{
  render(){
    return(
      <div class = "header">
      <SlideShow />
      </div>
    );
    }
}
