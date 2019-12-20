import React, { Component } from 'react';
import {Card, CardFooter, CardBody, CardTitle, CardImg, CardText, Button} from 'reactstrap';
import './FeaturedCard.scss';

export default class FeaturedCard extends Component{
  constructor(props){
    super(props);
    this.state={
      articleTitle:"Article Title",
      previewText:"Here is some test text...",
      author:"Author Name",
      date:"Date 10, 1298",
    }
  }

  render(){
    return(
      <Card>
        <CardImg />
        <CardBody>
          <CardTitle class="justify-content-right">
           {this.state.articleTitle}
          </CardTitle>
          <CardText>
            {this.state.previewText}
          </CardText>
        </CardBody>
        <CardFooter>
          {this.state.date}
        </CardFooter>
      </Card>
    );
    }
}
