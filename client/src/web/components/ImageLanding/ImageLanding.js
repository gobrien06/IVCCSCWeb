import React from 'react';
import {Row, Col} from 'reactstrap';
import "./ImageLanding.scss";

export default function ImageLanding(){
  return(
    <Row className="landing">
      <Col lg="8">
        <p className="leftimageheader">Reaching the vast opportunities of Irvine, one club at a time.</p>
        <p className="leftimagepara">Join us at room <b>B300</b> for our biweekly Friday meets, or stop by our Discord to talk!</p>
      </Col>
      <Col lg="4">
        <iframe title="discord" className="discordwidget" src="https://discordapp.com/widget?id=664619783676755969&theme=dark"
        width="400" height="400" allowtransparency="true" frameBorder="0">
        </iframe>
      </Col>
    </Row>
  );
}
