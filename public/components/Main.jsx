import React from "react";
import Title from "./Title"
import List from "./Liste"


export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {liste :  [
      {name:"aziz",age : 15},
      {name:"alex",age : 20},
      {name:"dave",age : 18},
      {name:"ana",age : 65}
    ]}
  }
    
  handleClick() {
    console.log("hello");
  }
    render() {
        
      return (
        <div>
            <Title />
            <List items={this.state.liste}/>
            <button onClick={this.handleClick}> click Me !</button>
        </div>
        
      );
    }
}