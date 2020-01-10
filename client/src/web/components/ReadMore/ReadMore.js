import React, { Component, Fragment } from 'react';
import {Button} from 'reactstrap';
import ViewFullPost from './ViewFullPost/ViewFullPost';

export default class FeaturedPost extends Component{
  constructor(props){
    super(props);
    this.state={
      isFullOpen:false,
    }
  }

  toFull=()=>{
    this.setState({isFullOpen:!this.state.isFullOpen});
  }

  render(){
    return(
      <Fragment>
      <ViewFullPost isOpen={this.state.isFullOpen} toggle={this.toFull}/>
      <Button className ="read" color="primary" onClick={this.toFull}>Read more</Button>
      </Fragment>
    );
  }
}
