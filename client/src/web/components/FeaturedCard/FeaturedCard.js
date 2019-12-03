import React, { Component } from 'react';
import {Card, CardFooter, CardBody, CardTitle, CardImg, CardText, Button} from 'reactstrap';
import Axios from 'axios';

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
      <Card sm="3">
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
