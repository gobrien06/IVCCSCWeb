import React, {Fragment, Component} from 'react';
import {Col} from 'reactstrap';
import BottomCard from '../BottomCard';
import axios from 'axios';

export default class ColList extends Component{
constructor(props){
  super(props);
  this.state={
    card:{
      content:"gdfgdfgfdsg",
      author: "dfjhg gdfhg",
      date: "MM/DD/YY",
      success: false,
      icon: "",
    }
  }
}

getData(n){
  axios.get('/posts/posts')
  .then(
    (response) =>
    {
      this.setState({
        content: response.data[n].content,
        author: response.data[n].author,
        icon: response.data[n].avatar,
        date: response.data[n].date,
        success: response.data.success,
    });
    console.log(response.data[n].content);
    },
    (error) =>
    {
      console.log(error);
    }
  );

}


showCards=()=>{
  let colList=[];
  let overAllCount=(this.props.rowCount)*3;
  console.log("total: " + this.props.numPosts);
  while((overAllCount<this.props.numPosts) && (colList.length < 3)){
    console.log("count: " + overAllCount);
    this.getData(overAllCount);

    colList.push(<Col md="3">
    <BottomCard content={this.state.content} author={this.state.author}
    icon = {this.state.avatar} date = {this.state.date}/>
    </Col>);

    overAllCount++
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


