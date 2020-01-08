import React, {Component} from 'react';
import {Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import "./BottomCard.scss";
import ReadMore from '../../ReadMore/ReadMore';
import axios from 'axios';

export default class BottomCard extends Component{
  constructor(props){
    super(props);
    this.state={
      articleTitle:"Article Title",
      previewText:
      "Lorem ipsum dolor sit amet, nec timeam docendi placerat ea, amet sententiae theophrastus ex ... Usu ad etiam clita nominati, pri putant iracundia ea. Te mei erat dicat aperiam, cum an euismod forensibus, nec an odio elit intellegebat. ... Et usu fierent detracto perfecto, ea odio volutpat splendide pri, solum forensibus est ei.",
      author:"Author Name",
      date:"MM/DD/YY"
    }
    this.sendID();
    this.getData();
  }

  getData(){
    axios.get('http://localhost:3000/')
    .then(
      (response) =>
      {
        this.setState({
          articleTitle: this.response.icon,
          previewText: this.response.previewText,
          author: this.response.author,
          date: this.response.date,
        },
      (error) =>
      {
        console.log(error);
      });
    });
  }

  //postID is passed down through props
  sendID(){
    let ID = this.props.postID;
    axios.post('http://localhost:3000/',ID)
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  render(){
    return(
      <div>
        <Card>
          <CardBody>
            <CardTitle>{this.state.articleTitle}</CardTitle>
            <CardSubtitle>{this.state.date}</CardSubtitle>
            <CardText>{this.state.previewText}</CardText>
            <ReadMore />
          </CardBody>
        </Card>
      </div>
    )
  }
}
