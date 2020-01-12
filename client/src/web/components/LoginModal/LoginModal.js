import React, { Component } from 'react';
import {Input, FormGroup, Label, Button, Modal, ModalHeader, ModalBody, Form} from 'reactstrap';
import "./LoginModal.scss";
import SignUpModal from '../SignUpModal/SignUpModal';
import axios from 'axios';

export default class LoginModal extends Component{
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      response:'',
      signUpOpen:''
    }
  }

  postUser=(e)=>{
    e.preventDefault();
    const user={
      email: this.state.email,
      password:this.state.password,
    };

    axios.post('http://localhost:3000', {user})
    .then((response) => {
      this.setState({response:response});
    }, (error) => {
    });
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    this.setState({email:e.target.elements.email.value});
    this.setState({password:e.target.elements.password.value});
    this.postUser(e);
    e.target.reset();
  }

  toggle = () =>{
    this.setState({signUpOpen:!this.state.signUpOpen});
  }

  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className="loginModal">
      <ModalHeader>
      <Button  close onClick={this.props.toggle}
      className="closeRight"
      aria-label="Cancel"/>
      Login
      </ModalHeader>
      <ModalBody>

      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>Email:</Label>
          <br/>
          <Input type="text" placeholder="Enter email" name="email"/>
          <br/>
          <Label>Password:</Label>
          <br/>
         <Input type="text" placeholder="Enter password" name="password"/>
      </FormGroup>
      <br/>
      <p className="signup" color="primary">{this.state.response}</p>
      <p className="signup"> Not a member? <u onClick={this.toggle}>Sign up here.</u> </p>
      <SignUpModal isOpen={this.state.signUpOpen} toggle={this.toggle} />
      <Button type="submit"
      color="primary"
      className="submit">
        Submit
      </Button>
      </Form>
      </ModalBody>
      </Modal>
    );
  }
}
