import React from "react";


export default class Title extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name : "aziz"
    }
  }
    
    render() {  
     
      return (
        <div>
          <p>{this.state.name} </p>
        </div>
      );
    }
  }