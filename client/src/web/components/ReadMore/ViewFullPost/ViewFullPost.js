import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Col} from 'reactstrap';
import axios from 'axios';

//need admin/user permissions to edit or delete post
export default class ViewFullPost extends Component{
  constructor(props){
    super(props);
    this.state={
      title:"Article Title",
      author:"Author Name",
      date:"MM/DD/YY",
      posttext:
      "Lorem ipsum dolor sit amet, nec timeam docendi placerat ea, amet sententiae theophrastus ex ... Usu ad etiam clita nominati, pri putant iracundia ea. Te mei erat dicat aperiam, cum an euismod forensibus, nec an odio elit intellegebat. ... Et usu fierent detracto perfecto, ea odio volutpat splendide pri, solum forensibus est ei\
      Lorem ipsum dolor sit amet, nec timeam docendi placerat ea, amet sententiae theophrastus ex ... Usu ad etiam clita nominati, pri putant iracundia ea. Te mei erat dicat aperiam, cum an euismod forensibus, nec an odio elit intellegebat. ... Et usu fierent detracto perfecto, ea odio volutpat splendide pri, solum forensibus est ei.\
      Lorem ipsum dolor sit amet, nec timeam docendi placerat ea, amet sententiae theophrastus ex ... Usu ad etiam clita nominati, pri putant iracundia ea. Te mei erat dicat aperiam, cum an euismod forensibus, nec an odio elit intellegebat. ... Et usu fierent detracto perfecto, ea odio volutpat splendide pri, solum forensibus est ei.\
      Lorem ipsum dolor sit amet, nec timeam docendi placerat ea, amet sententiae theophrastus ex ... Usu ad etiam clita nominati, pri putant iracundia ea. Te mei erat dicat aperiam, cum an euismod forensibus, nec an odio elit intellegebat. ... Et usu fierent detracto perfecto, ea odio volutpat splendide pri, solum forensibus est ei.\
      Lorem ipsum dolor sit amet, nec timeam docendi placerat ea, amet sententiae theophrastus ex ... Usu ad etiam clita nominati, pri putant iracundia ea. Te mei erat dicat aperiam, cum an euismod forensibus, nec an odio elit intellegebat. ... Et usu fierent detracto perfecto, ea odio volutpat splendide pri, solum forensibus est ei.\
      Lorem ipsum dolor sit amet, nec timeam docendi placerat ea, amet sententiae theophrastus ex ... Usu ad etiam clita nominati, pri putant iracundia ea. Te mei erat dicat aperiam, cum an euismod forensibus, nec an odio elit intellegebat. ... Et usu fierent detracto perfecto, ea odio volutpat splendide pri, solum forensibus est ei.",
      icon:"https://i.redd.it/ppj1rpi1tuc31.jpg",
      admin:false,
    }
  }

  componentDidMount(){
    this.getData();
  }

  getData=()=>{
    axios.get('http://localhost:3000/')
    .then(
      (response) =>
      {
        this.setState({
          title: this.response.title,
          posttext: this.response.posttext,
          icon: this.response.icon,
          author: this.response.author,
          date: this.response.date,
        },
      (error) =>
      {
        console.log(error);
      });
    });
  }

  //share button for emails? like button? additional functionality like replies?
  render(){
    if(this.state.admin){
      return(
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className="postreader" size="lg">
        <ModalHeader>
          <Button  close onClick={this.props.toggle}
          className="closeRight"
          aria-label="Cancel"/>
          {this.state.title}
        </ModalHeader>
        <ModalBody>
        <Row>
          <Col lg="2">
            <img className="icon" src={this.state.icon} alt="Icon" />
            <p className ="date">
            <br/>
            {this.state.date}</p>
          </Col>
          <Col lg="10">
            <p className="fullText">{this.state.posttext}</p>
            <Row>
              <Col xs="1">
              <Button color="primary" size="md" className="reply">Edit</Button>
              </Col>
              <Col xs="1">
              <Button color="danger" size="md" className="reply">Delete</Button>
              </Col>
            </Row>
          </Col>
        </Row>
        </ModalBody>
        </Modal>
      );
    }
    else{
      return(
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className="postreader" size="lg">
        <ModalHeader>
          <Button  close onClick={this.props.toggle}
          className="closeRight"
          aria-label="Cancel"/>
          {this.state.title}
        </ModalHeader>
        <ModalBody>
        <Row>
          <Col lg="2">
            <img className="icon" src={this.state.icon} alt="Icon" />
            <p className ="date">
            <br/>
            {this.state.date}</p>
          </Col>
          <Col lg="10">
            <p className="fullText">{this.state.posttext}</p>
          </Col>
        </Row>
        </ModalBody>
        </Modal>
      );
    }
  }
}
