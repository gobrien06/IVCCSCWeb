import React from 'react';
import {Row, Col} from 'reactstrap';
import "./ImageLanding.scss";
/*
 <iframe title="discord" className="discordwidget" src="https://discordapp.com/widget?id=465243359812780053&theme=dark"
        width="400" height="400" allowtransparency="true" frameBorder="0">
        </iframe>
        */
export default function ImageLanding(){
  return(
    <Row className="landing">
      <Col lg="8">
        <p className="leftimageheader">Where it happens.</p>
        <p className="leftimagepara">Join us at CAANAPI (room <b>B353</b>) for our biweekly Friday meets, or stop by our Discord to talk!</p>
      </Col>
      <Col lg="4">

      </Col>
    </Row>
  );
}
