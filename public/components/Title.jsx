import React from "react";
import PropTypes from 'prop-types';


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
          <p> Title : {this.props.title} </p>
          <p> Description : {this.props.description} </p>
          <p> state : {this.state.name} </p>
        </div>
      );

    }
  }

  Title.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,

  }