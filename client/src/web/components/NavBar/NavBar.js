import React, { Component } from 'react';
import LoginModal from '../LoginModal/LoginModal';
import {Button} from 'reactstrap';
import './NavBar.scss';
export default class NavBar extends Component{
 constructor(props){
   super(props);
     this.state={
       isModalOpen:false,
       isLoggedIn:true,
     }
 }
  //need to be able to check login status across multiple components
 toggle=()=>{
   this.setState({isModalOpen:!this.state.isModalOpen});
 }

 signout=()=>{
  this.setState({isLoggedIn:false});
 }


   render(){
    if(!this.state.isLoggedIn){
      return(
        <div className="navBar">
         IVC CSC
          <Button
          outline color="primary"
          onClick={this.toggle}
          className="login" isOpen={!this.isLoggedIn}>
          Login
          </Button>
          <LoginModal isOpen={this.state.isModalOpen} toggle={this.toggle}/>
        </div>
      );
     }
    else{
      return(
      <div className="navBar">
      IVC CSC
       <Button
       outline color="primary"
       onClick={this.signout}
       className="login" isOpen={this.isLoggedIn}>
       Logout
       </Button>
     </div>
      );
    }
   }
}


