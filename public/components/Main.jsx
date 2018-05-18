import React from "react"
import Title from "./Title"
import List from "./Liste"
import MyRoomColor from "./YourName"

import TestContext from "./../store/store"

import { Validator } from "./../Validators/Validator";



export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liste: [
        { name: "aziz", age: 15 },
        { name: "alex", age: 20 },
        { name: "dave", age: 18 },
        { name: "ana", age: 65 }
      ],
      nameValue: "",
      ageValue: "",
      errorMessage: { ErrorName: "", errorAge: "" }
    }
  }

  handleClick() {
    console.log("hello");
  }

  // just add set required to true if it's required

  handleChangeName(event) {

    try {
      this.setState({ nameValue: Validator.isValidate(event.target.value, "String") });
    } catch (error) {
      this.setState({
        errorMessage: { ErrorName: error.message, errorAge: "" }
      });
    }

  }

  handleChangeAge(event) {

    try {
      this.setState({ ageValue: Validator.isValidate(event.target.value, "Number") });
    } catch (error) {
      this.setState({
        errorMessage: { ErrorName: "", errorAge: error.message }
      });
    }

  }


  onSubmit(event) {
    event.preventDefault();
    let humanBeing = {
      name: this.state.nameValue,
      age: this.state.ageValue
    };

    this.setState(prevState =>({
      nameValue: '',
      ageValue: '',
      errorMessage: '',
      liste: prevState.liste.concat(humanBeing)
    }));
  }

  render() {

    return (
      <div>
        <Title title="this a prop title" description="Lorem ipsum dolor sit amet, consectetur" />
        <List items={this.state.liste} />

        <TestContext.Provider value={this.state.nameValue}>
            <div>
              <MyRoomColor/>
            </div>
          </TestContext.Provider>

        <form onSubmit={this.onSubmit.bind(this)}>
          <label>
            Name:
                  <input type="text" value={this.state.nameValue} onChange={this.handleChangeName.bind(this)} />
            <p>{this.state.errorMessage.ErrorName}</p>
          </label>
          <label>
            Age:
                  <input type="number" value={this.state.ageValue} onChange={this.handleChangeAge.bind(this)} />
            <p>{this.state.errorMessage.errorAge}</p>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <button onClick={this.handleClick.bind(this)}> click Me !</button>
      </div>

    );
  }
}