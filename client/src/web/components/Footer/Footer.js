import React,{Component} from 'react';
import {Row, Col} from 'reactstrap';
import "./Footer.scss";
import AboutUs from './AboutUs/AboutUs';
import PostModal from './PostModal/PostModal';
import LoginModal from '../LoginModal/LoginModal';
import RowList from './BottomCard/RowList/RowList';
import ColList from './BottomCard/ColList/ColList';
import axios from 'axios';

export default class Footer extends Component{
  constructor(props){
    super(props);
    this.state={
      aboutUsOpen:false,
      isLoginModalOpen:false,
      //isPostModalOpen:false,
      isLoggedIn:true,
      numPosts:20,
    }
    this.getNumPosts();
  }

  getNumPosts=()=>{
    axios.get('/posts/posts')
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

  aboutToggle=()=>{
    this.setState({aboutUsOpen:!this.state.aboutUsOpen});
  }

  //<Button outline color="primary" className="post" onClick={this.toggle}> Start Talking </Button>
  render(){
      return(
      <div className="containfoot">
      <PostModal isOpen={this.state.isPostModalOpen} toggle={this.toggle}/>
        <Row >
        <LoginModal isOpen={this.state.isLoginModalOpen} toggle={this.toggle}/>
          <Col md="3">
            <p className="leftheader">Be heard.</p>
            <img className="animation" src="https://i.pinimg.com/originals/3e/75/b5/3e75b528fcdc9da4f74d78b23167b4bd.gif" alt="animation"/>
          </Col>
          <ColList numPosts={this.state.numPosts} rowCount={1}/>
        </Row>
        <RowList numPosts={this.state.numPosts} />
        <Row className="below">
          <Col md="3">
          </Col>
          <Col md="9">
            <AboutUs isOpen={this.state.aboutUsOpen} toggle={this.aboutToggle}/>
            <p className="contact" onClick={this.aboutToggle}> ____________________________________________________
            <br/>About Us
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}
