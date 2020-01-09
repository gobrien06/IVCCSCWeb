import React, { Component } from 'react';
import {Button} from 'reactstrap';
import './NavBar.scss';
import SignUpModal from '../SignUpModal/SignUpModal.js';

export default class NavBar extends Component{
 constructor(props){
   super(props);
     this.state={
       isModalOpen:false,
     }
 }

 toggle=()=>{
   this.setState({isModalOpen:!this.state.isModalOpen});
 }

   render(){
      return(
        <div className="navBar">
         IVC CSC
          <Button
          outline color="primary"
          onClick={this.toggle}
          className="login" isOpen={!this.isLoggedIn}>
          Sign Up
          </Button>
          <SignUpModal isOpen={this.state.isModalOpen} toggle={this.toggle}/>
        </div>
      );
     }
}


