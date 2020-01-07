import React, { Component } from 'react';
import {Button} from 'reactstrap';

export default class FeaturedPost extends Component{

  toFull(){
    //takes user to full post
  }

  render(){
    return(
      <Button className ="read" color="primary" onClick={this.toFull}>Read more</Button>
    );
  }
}
