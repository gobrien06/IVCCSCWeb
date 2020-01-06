import React, { Component } from 'react';
import {Input, FormGroup, Label, Button, Modal, ModalHeader, ModalBody, Form} from 'reactstrap';
import "./LoginModal.scss";
import axios from 'axios';

export default class LoginModal extends Component{
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      isSent:false,
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
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    this.setState({email:e.target.elements.email.value});
    this.setState({password:e.target.elements.password.value});
    this.setState({isSent:true});
    this.postUser(e);
    e.target.reset();
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
