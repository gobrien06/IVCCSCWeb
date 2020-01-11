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
      this.setState({
        card:{
          content: this.response.content,
          author: this.response.author,
          date: this.response.date,
          success: this.response.success,
          icon: this.response.avatar,
        }
      },
    (error) =>
    {
      console.log(this.state.success);
      console.log(error);
    });
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

