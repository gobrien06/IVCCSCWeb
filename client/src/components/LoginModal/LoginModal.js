import React, { Component } from 'react';
import {Input, FormGroup, Label, Button, Modal,ModalHeader, ModalBody, Form} from 'reactstrap';
import Axios from 'axios';

export default class LoginModal extends Component{
  constructor(props){
    super(props);
    this.state={ //state 1 = blank and not sent
      email:'',
      password:'',
      isSent:false,
    }
  }

  getUser=(e)=>{ //declaring user object to post
    e.preventDefault();
    const user={
      email: this.state.email,
      password:this.state.password,
    };
    Axios.post('http://localhost:8000',{user}) //tries to post user object to server - replace this
    .then(res=>{
      console.log(res);
      console.log(res.data);
    })
  }

  handleChange = (e)=>{ //setState of email and pass to form text, state n
    this.setState({email:e.target.elements.email.value});
    this.setState({password:e.target.elements.password.value});
    this.setState({isSent:true});
    e.preventDefault(); //remove this if you want page to refresh after
  }

  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className="loginModal">
      <ModalHeader toggle={this.props.toggle}> Login </ModalHeader>
      <ModalBody>
      <Form onSubmit={this.handleChange}>
        <FormGroup controlId="formControlsText">
          <Label>Email:</Label>
          <br/>
          <Input type="text" placeholder="Enter email" name="email"/>
          <br/>
          <Label>Password:</Label>
          <br/>
         <Input type="text" placeholder="Enter password" name="password"/>
      </FormGroup>
      <br/>
      <br/>
      <Button type="submit">
      Login
      </Button>
      <p> Your email is: {this.state.email}</p>
      <p> Your password is: {this.state.password}</p>
      </Form>
      </ModalBody>
      </Modal>
    );
  }
}
