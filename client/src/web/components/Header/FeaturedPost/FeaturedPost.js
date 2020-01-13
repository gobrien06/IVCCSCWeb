import React, { Component } from 'react';
import {Card, CardBody, CardTitle, CardImg, Row, Col} from 'reactstrap';
import './FeaturedPost.scss';
import ReadMore from '../../ReadMore/ReadMore';
import axios from 'axios';


export default class FeaturedPost extends Component{
  constructor(props){
    super(props);
    this.state={
      content:
      "        ",
      icon:" ",
      author:"Author Name",
      date:"MM/DD/YY",
      success:false,
    }
  }

  getData(){
    axios.get(process.env.EXPRESS_PORT + '/posts/posts') //switch to GET?
    .then(
      (response) =>
      {
        this.setState({
          content: response.data['0'].content,
          author: response.data['0'].author,
          icon: response.data['0'].avatar,
          date: response.data['0'].date,
          success: response.data.success,
        },
      (error) =>
      {
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
            {this.state.date}
          </CardTitle>
          <Row>
            <Col md = "3" xs="4" sm="4" className = "side">
              <img className="icon" src={this.state.icon} alt="Icon" />
              <p className ="date">
              <br />
              {this.state.author}</p>
            </Col>
            <Col md = "9" xs="8" sm="8">
              <p className="previewtext">{this.state.content}</p>
              <ReadMore content={this.state.content} author={this.state.author} icon={this.state.icon} date={this.state.date}/>
           </Col>
          </Row>
        </CardBody>
      </Card>
      </div>
    );
    }
}
