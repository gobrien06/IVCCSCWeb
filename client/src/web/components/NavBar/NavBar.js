import React, { Component } from 'react';
import LoginModal from '../LoginModal/LoginModal';
import {Button} from 'reactstrap';
import './NavBar.scss';
export default class NavBar extends Component{
 constructor(props){
   super(props);
     this.state={
       isModalOpen:false,
     }
 }
 toggle=()=>{
   this.setState({isModalOpen:!this.state.isModalOpen})
   console.log("Modal state changed!");
 }
   render(){
     return(
       <div class="navBar">
        IVC CSC
         <Button
         outline color="primary"
         onClick={()=>{
          this.toggle()
         }}
         className="login">
         Login
         </Button>
         <LoginModal isOpen={this.state.isModalOpen} toggle={this.toggle}/>
       </div>
     )
   }
}


