import React, { Component } from 'react';
import {Input, FormGroup, Label, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form} from 'reactstrap';
import "./LoginModal.scss";
export default class LoginModal extends Component{
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      isSent:false,
    }
  }

  getUser=(e)=>{
    e.preventDefault();
    const user={
      email: this.state.email,
      password:this.state.password,
    };
   /* Axios.post('http://localhost:8000',{user}) //replacing axios -- DONT FORGET
    .then(res=>{
      //remove log later
      console.log(res);
      console.log(res.data);
    })*/
  }

  handleChange = (e)=>{
    this.setState({email:e.target.elements.email.value});
    this.setState({password:e.target.elements.password.value});
    this.setState({isSent:true});
    e.preventDefault();
  }

  render() {
      //MAKE SURE TO REMOVE MODALFOOTER
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className="loginModal">
      <ModalHeader>
      <Button onClick={this.props.toggle}
      close aria-label="Cancel"
      size="sm"
      className="close">
      x
      </Button>
      Login
      </ModalHeader>
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
      <Button type="submit"
      color="primary"
      className="submit">
        Submit
      </Button>
      </Form>
      </ModalBody>
      <ModalFooter>
      <p> Your email is: {this.state.email}</p> {/*remove later - testing only*/}
      <p> Your password is: {this.state.password}</p>
      </ModalFooter>
      </Modal>
    );
  }
}
