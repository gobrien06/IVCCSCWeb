import React,{Component} from 'react';
import {Row, Col} from 'reactstrap';
import "./Footer.scss";
import AboutUs from './AboutUs/AboutUs';
import PostModal from './PostModal/PostModal';
import LoginModal from '../LoginModal/LoginModal';
import axios from 'axios';
import BottomCard from './BottomCard/BottomCard';
import TableRows from './BottomCard/RowList/TableRows';

export default class Footer extends Component{
  constructor(props){
    super(props);
    this.state={
      aboutUsOpen:false,
      isLoginModalOpen:false,
      //isPostModalOpen:false,
      postList:[],
      numPosts:40,
    }
    this.getPosts();
  }




  getPosts=()=>{
    axios.get(process.env.REACT_PORT + '/posts/posts')
    .then((response)=>{
      this.setState({
        numPosts: response.data.length});
      for(let i=0;i<this.state.numPosts;i++){
        this.setState({
          postList: this.state.postList.concat(response.data[i]),
        })
      }
    },
    (error)=>{
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
      if(!this.state.postList[20]){ //wait until half the posts are loaded
        return null;
      }
      return(
      <div className="containfoot">
      <PostModal isOpen={this.state.isPostModalOpen} toggle={this.toggle}/>
        <Row >
        <LoginModal isOpen={this.state.isLoginModalOpen} toggle={this.toggle}/>
          <Col md="3">
            <p className="leftheader">Be heard.</p>
            <img className="animation" src="https://i.pinimg.com/originals/3e/75/b5/3e75b528fcdc9da4f74d78b23167b4bd.gif" alt="animation"/>
          </Col>
          <Col md="3">
          <BottomCard card={this.state.postList[0]}/>
          </Col>
          <Col md="3">
          <BottomCard card={this.state.postList[1]}/>
          </Col>
          <Col md="3">
          <BottomCard card={this.state.postList[2]}/>
          </Col>
        </Row>
        <TableRows numPosts={this.state.numPosts} postList={this.state.postList}/>
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
