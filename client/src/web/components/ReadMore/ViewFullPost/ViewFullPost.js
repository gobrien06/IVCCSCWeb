import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Col} from 'reactstrap';
import './ViewFullPost.scss';

//need admin/user permissions to edit or delete post
export default class ViewFullPost extends Component{
  constructor(props){
    super(props);
    this.state={
      author:"Author Name",
      date:"MM/DD/YY",
      content:
      // eslint-disable-next-line
      "Lorem ipsum dolor sit amet, nec timeam docendi placerat ea, amet sententiae theophrastus ex ... Usu ad etiam clita nominati, pri putant iracundia ea. Te mei erat dicat aperiam, cum an euismod forensibus, nec an odio elit intellegebat. ... Et usu fierent detracto perfecto, ea odio volutpat splendide pri, solum forensibus est ei\
      Lorem ipsum dolor sit amet, nec timeam docendi placerat ea, amet sententiae theophrastus ex ... Usu ad etiam clita nominati, pri putant iracundia ea. Te mei erat dicat aperiam, cum an euismod forensibus, nec an odio elit intellegebat. ... Et usu fierent detracto perfecto, ea odio volutpat splendide pri, solum forensibus est ei.\
      Lorem ipsum dolor sit amet, nec timeam docendi placerat ea, amet sententiae theophrastus ex ... Usu ad etiam clita nominati, pri putant iracundia ea. Te mei erat dicat aperiam, cum an euismod forensibus, nec an odio elit intellegebat. ... Et usu fierent detracto perfecto, ea odio volutpat splendide pri, solum forensibus est ei.\
      Lorem ipsum dolor sit amet, nec timeam docendi placerat ea, amet sententiae theophrastus ex ... Usu ad etiam clita nominati, pri putant iracundia ea. Te mei erat dicat aperiam, cum an euismod forensibus, nec an odio elit intellegebat. ... Et usu fierent detracto perfecto, ea odio volutpat splendide pri, solum forensibus est ei.\
      Lorem ipsum dolor sit amet, nec timeam docendi placerat ea, amet sententiae theophrastus ex ... Usu ad etiam clita nominati, pri putant iracundia ea. Te mei erat dicat aperiam, cum an euismod forensibus, nec an odio elit intellegebat. ... Et usu fierent detracto perfecto, ea odio volutpat splendide pri, solum forensibus est ei.\
      Lorem ipsum dolor sit amet, nec timeam docendi placerat ea, amet sententiae theophrastus ex ... Usu ad etiam clita nominati, pri putant iracundia ea. Te mei erat dicat aperiam, cum an euismod forensibus, nec an odio elit intellegebat. ... Et usu fierent detracto perfecto, ea odio volutpat splendide pri, solum forensibus est ei.",
      icon:"https://i.redd.it/ppj1rpi1tuc31.jpg",
    }
  }

  render(){
    return(
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className="postreader" size="lg">
      <ModalHeader className="title">
        <Button  close onClick={this.props.toggle}
        className="closeRight"
        aria-label="Cancel"/>
        {this.props.author}
      </ModalHeader>
      <ModalBody>
      <Row className="date">
        <Col lg="2">
          <img className="icon" src={this.props.icon} alt="Icon" />
          <p className ="name">
          <br/>
          {this.props.date}</p>
        </Col>
        <Col lg="10">
          <p className="fullText">{this.props.content}</p>
        </Col>
      </Row>
      </ModalBody>
      </Modal>
      );
    }
}

