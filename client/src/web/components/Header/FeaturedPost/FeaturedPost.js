import React, { Component } from 'react';
import {Card, CardBody, CardTitle, CardImg, Row, Col, Button} from 'reactstrap';
import './FeaturedPost.scss';
import axios from 'axios';

export default class FeaturedPost extends Component{
  constructor(props){
    super(props);
    this.state={
      articleTitle:"Article Title",
      previewText:
      "Lorem ipsum dolor sit amet, nec timeam docendi placerat ea, amet sententiae theophrastus ex ... Usu ad etiam clita nominati, pri putant iracundia ea. Te mei erat dicat aperiam, cum an euismod forensibus, nec an odio elit intellegebat. ... Et usu fierent detracto perfecto, ea odio volutpat splendide pri, solum forensibus est ei.",
      icon:"https://i.redd.it/ppj1rpi1tuc31.jpg",
      author:"Author Name",
      date:"MM/DD/YY"
    }
  }

  getData(){
    axios.get('http://localhost:3000/')
    .then(
      (response) =>
      {
        this.setState({
          articleTitle: this.response.icon,
          previewText: this.response.previewText,
          icon: this.response.icon,
          author: this.response.author,
          date: this.response.date,
        },
      (error) =>
      {
        console.log(error);
      });
    });
  }

  componentDidMount(){
    this.getData();
  }

  toFull(){
    //takes user to full post
  }

  render(){
    return(
      <div class="contain">
      <Card className="card">
        <CardImg />
        <CardBody>
          <CardTitle className = "title" text="">
            {this.state.articleTitle}
          </CardTitle>
          <Row>
            <Col md = "2" xs="4" sm="4" className = "side">
              <img class="icon" src={this.state.icon} alt="Icon" />
              <p class ="date">
              ___________ <br />
              {this.state.date}</p>
            </Col>
            <Col md = "10" xs="8" sm="8">
              <p class="previewtext">{this.state.previewText}</p>
              <Button className ="read" color="primary" onClick={this.toFull}>Read more</Button>
           </Col>
          </Row>
        </CardBody>
      </Card>
      </div>
    );
    }
}
