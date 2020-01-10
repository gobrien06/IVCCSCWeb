import React from 'react';
import FeaturedPost from "./FeaturedPost/FeaturedPost.js";
import SlideShow from "./SlideShow/SlideShow.js";
import './Header.css';

export default function Header(){
    return(
      <div className = "header">
      <SlideShow />
      <FeaturedPost />
      </div>
    );
}

