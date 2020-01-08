import React, {Component, Fragment} from 'react';
import {Row, Col} from 'reactstrap';
import ColList from '../ColList/ColList';

export default class RowList extends Component{
  constructor(props){
    super(props);
    this.showPosts();
  }

  showPosts=()=>{
    let rowList=[];
    let rowCount=1;
    for(let i=3;i<this.props.numPosts;i++){
      let rowSpot = (i)%3;
      if(rowSpot === 0){
        rowCount++;
        rowList.push(<Row className="below" key={i}>
          <Col md="3"></Col>
          <ColList numPosts={this.props.numPosts} rowCount={rowCount}/>
          </Row>);
      }
    }
    return rowList;
  }

  render(){
    return(
      <Fragment>
      {this.showPosts()}
      </Fragment>
    );
  }

}
