import React,{Component} from 'react';
import {Row, Col, Button} from 'reactstrap';
import "./Footer.scss";
import PostModal from './PostModal/PostModal';
import LoginModal from '../LoginModal/LoginModal';
import RowList from './BottomCard/RowList/RowList';
import ColList from './BottomCard/ColList/ColList';
import axios from 'axios';

export default class Footer extends Component{
  constructor(props){
    super(props);
    this.state={
      isLoginModalOpen:false,
      isPostModalOpen:false,
      isLoggedIn:true,
      numPosts:10,
    }
    this.getNumPosts();
  }

  getNumPosts=()=>{
    axios.get('http://localhost:3000/')
    .then((response)=>{
      this.setState({numPosts:this.response.numPost});
    },
    (error)=>{
      console.log(error);
    }
    )
  }

  toggle=()=>{
    if(this.state.isLoggedIn)
      this.setState({isPostModalOpen:!this.state.isPostModalOpen});
    else
      this.setState({isLoginModalOpen:!this.state.isLoginModalOpen});
  }


  render(){
      return(
      <div className="containfoot">
      <PostModal isOpen={this.state.isPostModalOpen} toggle={this.toggle}/>
        <Row >
        <LoginModal isOpen={this.state.isLoginModalOpen} toggle={this.toggle}/>
          <Col md="3">
            <p className="leftheader">Be heard.</p>
            <Button outline color="primary" className="post" onClick={this.toggle}> Start Talking </Button>
          </Col>
          <ColList numPosts={this.state.numPosts} rowCount={1}/>
        </Row>
        <RowList numPosts={this.state.numPosts} />
        <Row className="below">
          <Col md="3">
          </Col>
          <Col md="9">
            <p className="contact"> ____________________________________________________
            <br/>About Us</p>
          </Col>
        </Row>
      </div>
    );
  }
}
