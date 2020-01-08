import React, {Component} from 'react';
import {Input, FormGroup, Label, Button, Modal, ModalHeader, ModalBody, Form} from 'reactstrap';
import axios from 'axios';

export default class PostModal extends Component{
  constructor(props){
    super(props);
    this.state={
      title:'',
      posttext:'',
      date:'',
      userID:'', //need to assign userID values to users
    }
  }

  setDate=()=>{
    var day = new Date();
    var d = String(day.getDate()).padStart(2, '0');
    var m = String(day.getMonth() + 1).padStart(2, '0');
    var y = day.getFullYear();
    day = m + '/' + d + '/' + y;
    this.setState({date: day});
  }

  postPost=(e)=>{
    e.preventDefault();
    const post={
      title: this.state.title,
      posttext:this.state.posttext,
      date:this.state.date,
      userID: this.state.userID,
    };

    axios.post('http://localhost:3000', {post})
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    this.setState({title:e.target.elements.title.value});
    this.setState({posttext:e.target.elements.posttext.value});
    this.setDate();
    this.postPost(e);
    e.target.reset();
  }

  render(){
    return(
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} size="lg">
      <ModalHeader>
        <Button  close onClick={this.props.toggle}
        className="closeRight"
        aria-label="Cancel"/>
        Post
      </ModalHeader>
      <ModalBody>
        <Form>
        <FormGroup>
          <Label for="Title">Title</Label>
          <Input type="text" placeholder="Enter Title" name="title"/>
          <br/>
          <Label for="Text">Post Body</Label>
          <Input type="textarea" placeholder="Enter Post" name="posttext" rows={10} cols={10}/>
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

