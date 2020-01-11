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
        <Card>
          <CardBody>
            <CardTitle>{this.props.card['author']}</CardTitle>
            <CardSubtitle>{this.props.card['date']}</CardSubtitle>
            <CardText className="text">{this.props.card['content']}</CardText>
            <ReadMore content={this.props.card.content} author={this.props.card.author} icon={this.props.card.icon} date={this.props.date}/>
          </CardBody>
        </Card>
      </div>
    )
  }
}
