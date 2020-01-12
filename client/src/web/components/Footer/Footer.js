import React,{Component} from 'react';
import {Row, Col} from 'reactstrap';
import "./Footer.scss";
import AboutUs from './AboutUs/AboutUs';
import PostModal from './PostModal/PostModal';
import LoginModal from '../LoginModal/LoginModal';
import axios from 'axios';
import BottomCard from './BottomCard/BottomCard';

export default class Footer extends Component{
  constructor(props){
    super(props);
    this.state={
      aboutUsOpen:false,
      isLoginModalOpen:false,
      //isPostModalOpen:false,
      postList:[],
      numPosts:20,
    }
  }

componentWillMount(){
  this.getPosts();
}
  getPosts=()=>{
    axios.get('/posts/posts')
    .then((response)=>{
      this.setState({
        numPosts: response.data.length});
      for(let i=0;i<this.state.numPosts;i++){
        this.setState({
          postList: this.state.postList.concat(response.data[i]),
        })
      }
      console.log(this.state.postList);
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


  renderTableRows() {
    let numRows = (this.state.numPosts)/3;
    for(let i=0;i<numRows;i++){
       let startCard = ((numRows-1)*3);
       let secondCard = (startCard)+1;
       let thirdCard = (secondCard)+1;

       numRows++;

       if(thirdCard){
         return(
         <Row className="below">
         <Col sm="3"></Col>
         <Col sm="3"><BottomCard card={this.state.postList[startCard]}/></Col>
         <Col sm="3"><BottomCard card={this.state.postList[secondCard]}/></Col>
         <Col sm="3"><BottomCard card={this.state.postList[thirdCard]}/></Col>
         </Row>
         );
       }
       else if(secondCard){
         return(
           <Row className="below">
           <Col sm="3"></Col>
           <Col sm="3"><BottomCard card={this.state.postList[startCard]}/></Col>
           <Col sm="3"><BottomCard card={this.state.postList[secondCard]}/></Col>
           </Row>
           );
       }
       else if(startCard){
         return(
           <Row className="below">
           <Col sm="3"></Col>
           <Col sm="3"><BottomCard card={this.state.postList[startCard]}/></Col>
           </Row>
           );
       }
       else{
        console.log("made it out with: " + startCard);
         break;
       }
   }
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
