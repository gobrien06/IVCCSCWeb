import React, { Component, Fragment } from 'react';
import {Button} from 'reactstrap';
import ViewFullPost from './ViewFullPost/ViewFullPost';
import './ReadMore.css';

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
      <ViewFullPost isOpen={this.state.isFullOpen} toggle={this.toFull} content={this.props.content} author={this.props.author} icon={this.props.icon} date={this.props.date}/>
      <Button className ="read" color="primary" onClick={this.toFull}>Read more</Button>
      </Fragment>
    );
  }
}
