import React, {Component} from 'react';
import {FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import Axios from 'axios';

export default class Forms extends Component {

  constructor(props){
    super(props);
  this.state={
    email:'',
    password:'',

  }
  }
  getUser=(e)=>{
    e.preventDefault();
    const user={
      email: this.state.email,
      password:this.state.password,
    };
    Axios.post('http://localhost:8000/forms',{user}) //tries to post user object to server
    .then(res=>{
      console.log(res);
      console.log(res.data);
    })
  }

  handleChange = (e)=>{
    this.setState.email({email:e.target.elements.email.value});
    this.setState.password({password:e.target.elements.password.value});
  }
  /* for calling API
  componentDidMount(){
    fetch('') //insert api here
    .then(res=>res.json())
    .then(json => {
      this.setState({
        isLoaded:true,
      })
    });
  }
  */
  render() {
    return (
      <form>
      <Button type="submit" bsStyle="Primary" onclick={this.handleChange}>
          Login
        </Button>
        <br/>
        <br/>
        <FormGroup controlId="formControlsText">
          <ControlLabel>Email:</ControlLabel>
          <br/>
          <FormControl type="text" placeholder="Enter email" name="email"/>
          <br/>
          <ControlLabel>Password:</ControlLabel>
          <br/>
         <FormControl type="text" placeholder="Enter password" name="password"/>
      </FormGroup>

      </form>
    );
  }
/* example of how to call API
  onClick(ev){
    console.log("Sending GET API call");
    Axios.get('http://localhost:8000/forms') //getting information
    .then(res=>{
      console.log(res.json())
    })
    .then(response=>{
      console.log(JSON.stringify(response));
    })
  }
  */
}
