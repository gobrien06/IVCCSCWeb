import React, { Component } from 'react';
import {Input, FormGroup, Label, Button, Modal, ModalHeader, ModalBody, Form} from 'reactstrap';
//import "./SignUpModal.scss";
import axios from 'axios';

//copied loginmodal placeholder
export default class SignUpModal extends Component{
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      response:'',
    }
  }

  postUser=(e)=>{
    e.preventDefault();
    const email = this.state.email;

    axios.post('http://localhost:3000/emails/insert', {email})
    .then((response) => {
      console.log(response);
      this.setState({response:response});
    }, (error) => {
      console.log(error);
    });
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    this.setState({email:e.target.elements.email.value});
    this.postUser(e);
    e.target.reset();
  }

  //need to consider email confirmations?
  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className="loginModal">
      <ModalHeader>
      <Button  close onClick={this.props.toggle}
      className="closeRight"
      aria-label="Cancel"/>
      Sign Up for Our Newsletter
      </ModalHeader>
      <ModalBody>

      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>Email:</Label>
          <br/>
          <Input type="text" placeholder="Enter email" name="email"/>
          <br/>
      </FormGroup>
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
