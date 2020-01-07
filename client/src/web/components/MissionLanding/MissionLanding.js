import React, { Component } from 'react';
import {Row,Col} from 'reactstrap';
import "./MissionLanding.css";

export default function MissionLanding(){
  return(
    <Row className="mission">
      <Col md="3" >
        <p class="leftheader">Our mission?</p>
        <p class="divider">______________________________</p>
        <p class="leftpara"> Supporting the untapped potential of our nation's community colleges, one club at a time. </p>
      </Col>
      <Col md="9" >
        <p class="rightheader">Success from passion.</p>
      </Col>
    </Row>
  );
}
