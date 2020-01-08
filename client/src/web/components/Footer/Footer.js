import React,{Component} from 'react';
import {Row, Col, Button} from 'reactstrap';
import BottomCard from './BottomCard/BottomCard';
import "./Footer.scss";
import PostModal from './PostModal/PostModal';
import LoginModal from '../LoginModal/LoginModal';


export default class Footer extends Component{
  constructor(props){
    super(props);
    this.state={
      isLoginModalOpen:false,
      isPostModalOpen:false,
      isLoggedIn:false,
    }
  }

  getLoginStatus=()=>{
    //need to be able to check login status across multiple components
  }

  toggle=()=>{
    this.getLoginStatus();
    this.setState({isPostModalOpen:!this.state.isPostModalOpen})
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
          <Col md="3">
            <BottomCard />
          </Col>
          <Col md="3">
            <BottomCard />
          </Col>
          <Col md="3">
            <BottomCard />
          </Col>
        </Row>
        <Row className="below">
          <Col md="3">
          </Col>
          <Col md="3">
            <BottomCard />
          </Col>
          <Col md="3">
            <BottomCard />
          </Col>
          <Col md="3">
            <BottomCard />
          </Col>
        </Row>
        <Row className="below">
          <Col md="3">
          </Col>
          <Col md="9">
            <p className="contact"> ____________________________________________________
            <br/>Contact Us</p>
          </Col>
        </Row>
      </div>
    );
  }
}
