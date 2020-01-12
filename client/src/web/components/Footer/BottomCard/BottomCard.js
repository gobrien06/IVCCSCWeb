import React, {Component} from 'react';
import {Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import "./BottomCard.scss";
import ReadMore from '../../ReadMore/ReadMore';

export default class BottomCard extends Component{
   // eslint-disable-next-line
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div>
        <Card className="botcard">
          <CardBody>
            <CardTitle className="title">{this.props.card.date}</CardTitle>
            <CardSubtitle className="name">{this.props.card.author}</CardSubtitle>
            <CardText className="text">{this.props.card.content}</CardText>
            <ReadMore content={this.props.card.content} author={this.props.card.author} icon={this.props.card.avatar} date={this.props.card.date}/>
          </CardBody>
        </Card>
      </div>
    )
  }
}
