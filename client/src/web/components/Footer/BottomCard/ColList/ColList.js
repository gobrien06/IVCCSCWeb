import React, {Fragment, Component} from 'react';
import {Col} from 'reactstrap';
import BottomCard from '../BottomCard';
import axios from 'axios';

export default class ColList extends Component{
constructor(props){
  super(props);
  this.state={
    cardList:[],
    card:{
      content:"gdfgdfgfdsg",
      author: "dfjhg gdfhg",
      date: "MM/DD/YY",
      success: false,
      icon: "",
    }
  }
  this.initializeCards();
}

initializeCards(){
  for(let i=0;i<this.props.numPosts;i++){
    this.getData();
    this.state.cardList.append(this.state.card);
  }
}

getData(){
  axios.get('/posts/posts')
  .then(
    (response) =>
    {
      console.log(response);
      for(let i=0;i<this.props.numPosts;i++){
        let x = toString(i);
        this.setState({
          card:{
            content: this.response[x].content,
            author: this.response[x].author,
            date: this.response[x].date,
            success: this.response[x].success,
            icon: this.response[x].avatar,
          }
        },
      (error) =>
      {
        console.log(error);
      });
      }

  });
}


showCards=()=>{
  let colList=[];
  let n=0;
  for(n; (n<(this.props.numPosts-((this.props.rowCount-1)*3)) && (n<3)) ;n++){
    colList.push(<Col md="3">
    <BottomCard card={this.state.cardList[n]}/>
    </Col>);
  }
  return colList;
}

render(){
  return(
    <Fragment>
    {this.showCards()}
    </Fragment>
  );
}
}

