import React,{Component} from 'react';
import {Row, Col} from 'reactstrap';
import BottomCard from '../BottomCard';

export default class TableRows extends Component {
  decide=()=>{
    let numRows=1;
    let start=numRows*3;
    let elements=[];

    while(start < this.props.numPosts){
      console.log("in once");
      numRows++;
      start = numRows*3;
      console.log(start);
      console.log(elements);
        if(this.props.postList[start+2]){
          elements.push(
          <Row className="below">
          <Col sm="3"></Col>
          <Col sm="3"><BottomCard card={this.props.postList[start]}/></Col>
          <Col sm="3"><BottomCard card={this.props.postList[start+1]}/></Col>
          <Col sm="3"><BottomCard card={this.props.postList[start+2]}/></Col>
          </Row>);
      }
      else if(this.props.postList[start+1]){
        elements.push(
          <Row className="below">
          <Col sm="3"></Col>
          <Col sm="3"><BottomCard card={this.props.postList[start]}/></Col>
          <Col sm="3"><BottomCard card={this.props.postList[start+1]}/></Col>
          </Row>
          );
      }
      else if(this.props.postList[start]){
        elements.push(
          <Row className="below">
          <Col sm="3"></Col>
          <Col sm="3"><BottomCard card={this.props.postList[start]}/></Col>
          </Row>
        );
      }
      else{
        return elements;
      }
    }
  }

  render(){
    return(
      <div>
      {this.decide()}
      </div>
    );
 }
}
