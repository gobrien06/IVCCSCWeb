import React, { Component } from 'react';
import {Card, CardBody, CardTitle, CardImg, Row, Col} from 'reactstrap';
import './FeaturedPost.scss';
import ReadMore from '../../ReadMore/ReadMore';
import axios from 'axios';

export default class FeaturedPost extends Component{
  constructor(props){
    super(props);
    this.state={
      articleTitle:"Article Title",
      previewText:
      "Lorem ipsum dolor sit amet, nec timeam docendi placerat ea, amet sententiae theophrastus ex ... Usu ad etiam clita nominati, pri putant iracundia ea. Te mei erat dicat aperiam, cum an euismod forensibus, nec an odio elit intellegebat. ... Et usu fierent detracto perfecto, ea odio volutpat splendide pri, solum forensibus est ei.",
      icon:"https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Irvine_Valley_College_seal.svg/1200px-Irvine_Valley_College_seal.svg.png",
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
          articleTitle: this.response.title,
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

  render(){
    return(
      <div className="contain">
      <Card className="card">
        <CardImg />
        <CardBody>
          <CardTitle className = "title" text="">
            {this.state.articleTitle}
          </CardTitle>
          <Row>
            <Col md = "2" xs="4" sm="4" className = "side">
              <img className="icon" src={this.state.icon} alt="Icon" />
              <p className ="date">
              __________ <br />
              {this.state.date}</p>
            </Col>
            <Col md = "10" xs="8" sm="8">
              <p className="previewtext">{this.state.previewText}</p>
              <ReadMore />
           </Col>
          </Row>
        </CardBody>
      </Card>
      </div>
    );
    }
}
