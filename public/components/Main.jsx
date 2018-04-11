import React from "react";
import Title from "./Title"
import List from "./Liste"


export default class Main extends React.Component {
    render() {
        const liste = [
          {name:"aziz",age : 15},
          {name:"alex",age : 20},
          {name:"dave",age : 18},
          {name:"ana",age : 35}
        ]
      return (
        <div>
            <Title />
            <List items={liste}/>
        </div>
        
      );
    }
  }