import React from "react";
import Title from "./Title"
import List from "./Liste"
import {Validator} from "./../Validators/Validator";



export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liste :  [
      {name:"aziz",age : 15},
      {name:"alex",age : 20},
      {name:"dave",age : 18},
      {name:"ana",age : 65}
    ],
      nameValue: "",
      ageValue:0,
      errorMessage:{ErrorName : "" , errorAge : ""}
    }
  }
    
  handleClick() {
    console.log("hello");
  }

  handleChangeName(event) {
    
    try {
      this.setState({nameValue:  Validator.isString(event.target.value)});      
    } catch (error) {
      this.setState({
        errorMessage: {ErrorName : error.message , errorAge : ""}
      });
    }
  }

  handleChangeAge(event) {
    try{
    this.setState({ageValue: Validator.isNumeric(event.target.value)});
    } catch (error) {
      this.setState({
        errorMessage: {ErrorName : "" , errorAge : error.message}
      });
    }
  }

 
  onSubmit(event){
    event.preventDefault();
        let humanBeing = {
            name :this.state.nameValue, 
            age : this.state.ageValue
        };

        this.setState({
            nameValue: '',
            ageValue: '',
            errorMessage: '',
            liste: [...this.state.liste, humanBeing]
        });
  }

    render() {
        
      return (
        <div>
            <Title title = "this a prop title" description="Lorem ipsum dolor sit amet, consectetur" />
            <List items={this.state.liste}/>
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>
                  Name:
                  <input type="text" value={this.state.nameValue} onChange={this.handleChangeName.bind(this)} />
                  <p>{this.state.errorMessage.ErrorName}</p>
                </label>
                <label>
                  Age:
                  <input type="text" value={this.state.ageValue} onChange={this.handleChangeAge.bind(this)} />
                  <p>{this.state.errorMessage.errorAge}</p>
                </label>
                  <input type="submit" value="Submit" />
            </form>
            <button onClick={this.handleClick.bind(this)}> click Me !</button>
        </div>
        
      );
    }
}