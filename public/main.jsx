import React from "react";
import ReactDOM from "react-dom";

class Message extends React.Component {
    render() {
      return (
        <p> hello world </p>
      );
    }
  }
  
  
  
  
  const app =  document.getElementById('app');
  ReactDOM.render(<Message/>,app);
  