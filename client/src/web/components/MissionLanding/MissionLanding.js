import React from 'react';
import {Row,Col} from 'reactstrap';
import "./MissionLanding.scss";

export default function MissionLanding(){
  return(
    <Row className="mission">
      <Col md="6" >
        <p className="leftheader">Imagine. Design. <br/>Create. Discover.</p>
        <p className="divider">_____________________________________</p>
        <p className="leftpara">Support the untapped potential of community colleges through projects and pioneering.
        Communicate, collaborate, and produce results.</p>
      </Col>
      <Col md="6" >
        <p className="rightheader">Success from passion.</p>
      </Col>
    </Row>
  );
}
