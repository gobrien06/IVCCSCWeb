import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import './AboutUs.css';

export default class AboutUs extends Component{
  render(){
    return(
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className="postreader" size="lg">
      <ModalHeader>
        <Button  close onClick={this.props.toggle}
        className="closeRight"
        aria-label="Cancel"/>
        About Us
      </ModalHeader>
      <ModalBody>
      <ul className="fullText">
          <li> <b>Who are we? </b> </li>
          We are a club based around computer science at Irvine Valley College. Our mission is to provide more opportunities within
          computer science to local students. Our meetings comprise of lectures with real-world engineers and projects for groups, ranging
          from a variety of topics. For more information join our Discord or contact us at: ivccsc@gmail.com.
          <br/> <br/>
          <li>
          <b> Who can join? </b> </li>
          Anyone who is an Irvine Valley College student can attend our meetings, and everyone is welcome to attend our events (such as the
          Irvine Valley College Hackathon).
          <br/>
          </ul>
      </ModalBody>
      <ModalFooter>
      <p className="fullText">
      Website created by Roth Vann and Gabrielle O'Brien.
      </p>
      </ModalFooter>
      </Modal>
    );
  }
}
