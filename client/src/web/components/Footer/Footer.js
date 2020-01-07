import React from 'react';
import {Row, Col, Button} from 'reactstrap';
import BottomCard from './BottomCard/BottomCard';
import "./Footer.scss";


export default function Footer(){
  return(
    <div className="containfoot">
      <Row >
        <Col md="3">
          <p className="leftheader">Be heard.</p>
          <Button outline color="primary" className="post"> Start Talking </Button>
        </Col>
        <Col md="3">
          <BottomCard />
        </Col>
        <Col md="3">
          <BottomCard />
        </Col>
        <Col md="3">
          <BottomCard />
        </Col>
      </Row>
      <Row className="below">
        <Col md="3">
        </Col>
        <Col md="3">
          <BottomCard />
        </Col>
        <Col md="3">
          <BottomCard />
        </Col>
        <Col md="3">
          <BottomCard />
        </Col>
      </Row>
      <Row className="below">
        <Col md="3">
        </Col>
        <Col md="9">
          <p className="contact"> ____________________________________________________
          <br/>Contact Us</p>
        </Col>
      </Row>
    </div>
  );
}
