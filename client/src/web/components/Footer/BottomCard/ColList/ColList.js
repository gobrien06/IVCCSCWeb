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

componentWillMount(){
  this.getData();
}

getData(){
  axios.post('/posts/getPosts')
  .then(
    (response) =>
    {
      console.log(response.data);
      for(let i=0;i<this.props.numPosts;i++){
        this.state.cardList.push({
            content: response.data[i].content,
            author: response.data[i].author,
            date: response.data[i].date,
            success: response.data.success,
            icon: response.data[i].avatar,
          });
    }
        
      console.log(this.state.cardList);
    },
      (error) =>
      {
        console.log(error);
      }
  );
  return cardList;
}


showCards=()=>{
  let colList=[];
  let n=0;
  for(n; (n<(this.props.numPosts-((this.props.rowCount-1)*3)) && (n<3)) ;n++){
    colList.push(<Col md="3">
    <BottomCard card={(this.getData())[n]}/>
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

