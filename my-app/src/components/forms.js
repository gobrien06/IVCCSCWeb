import React, {Component} from 'react';
import {FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import Axios from 'axios';

export default class Forms extends Component {

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
      <div>
      <form onSubmit={this.handleChange}>
      <Button type="submit">
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
      <p> Your email is: {this.state.email}</p>
      <p> Your password is: {this.state.password}</p>
      </div>
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
}
