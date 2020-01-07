import React from 'react';
import {Row,Col} from 'reactstrap';
import "./MissionLanding.scss";

export default function MissionLanding(){
  return(
    <Row className="mission">
      <Col md="3" >
        <p className="leftheader">Our mission?</p>
        <p className="divider">______________________________</p>
        <p className="leftpara"> Supporting the untapped potential of our nation's community colleges, one club at a time. </p>
      </Col>
      <Col md="9" >
        <p className="rightheader">Success from passion.</p>
      </Col>
    </Row>
  );
}
