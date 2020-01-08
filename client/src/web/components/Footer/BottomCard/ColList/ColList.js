import React, {Fragment, Component} from 'react';
import {Col} from 'reactstrap';
import BottomCard from '../BottomCard';
import axios from 'axios';

export default class ColList extends Component{
constructor(props){
  super(props);
  this.state={
    postID:12435,
  }
}

/* commented out temporarily - lots of failed responses causes lag
getPostID=()=>{
  axios.get('http://localhost:3000/')
  .then((response)=>{
    this.setState({postID:this.response.postID});
  },
  (error)=>{
    console.log(error);
  }
  )
}
*/

//this.getPostID()
showCards=()=>{
  let colList=[];
  let n=0;
  for(n; (n<(this.props.numPosts-((this.props.rowCount-1)*3)) && (n<3)) ;n++){
    colList.push(<Col md="3" key={this.state.postID}>
    <BottomCard postID={'2'}/>
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

