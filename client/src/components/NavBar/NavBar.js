import React, { Component } from 'react';
import LoginModal from '../LoginModal/LoginModal';
import {Button} from 'reactstrap';

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
         <Button onClick={()=>{
          this.toggle()
         }}>
         Login
         </Button>
         <LoginModal isOpen={this.state.isModalOpen} toggle={this.toggle}/>
       </div>
     )
   }
}


