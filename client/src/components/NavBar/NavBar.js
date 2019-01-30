import React, { Component } from 'react';
import LoginModal from '../LoginModal/LoginModal';
import {Button} from 'reactstrap';

export default class NavBar extends Component{
 constructor(props){
   super(props);
     this.state={
       modalOpen:false,
     }
 }
 toggle=()=>{
   this.setState.modalOpen=!this.state.modalOpen;
   console.log("Modal state changed!");
 }
   render(){
     return(
       <div class="navBar">
         <Button onClick={this.toggle}
         >
         Login
         </Button>
         <LoginModal isOpen={this.state.modalOpen} toggle={this.toggle}/>
       </div>
     )
   }
}


