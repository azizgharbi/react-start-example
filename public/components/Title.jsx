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
          <p> props : {this.props.title} </p>
          <p> state : {this.state.name} </p>
        </div>
      );
    }
  }