import React from "react";
import Title from "./Title"
import List from "./Liste"


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
      ageValue:""
    }

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAge = this.handleChangeAge.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
    
  handleClick() {
    console.log("hello");
  }

  handleChangeName(event) {
    this.setState({nameValue: event.target.value});
  }

  handleChangeAge(event) {
    this.setState({ageValue: event.target.value});
  }

  handleSubmit(event) {
    this.state.liste.push({
      name:this.state.nameValue,
      age : this.state.ageValue
    });

    
    event.preventDefault();
  }

    render() {
        
      return (
        <div>
            <Title title = "this a prop title"/>
            <List items={this.state.liste}/>
            <form onSubmit={this.handleSubmit}>
                <label>
                  Name:
                  <input type="text" value={this.state.nameValue} onChange={this.handleChangeName} />
                </label>
                <label>
                  Age:
                  <input type="text" value={this.state.ageValue} onChange={this.handleChangeAge} />
                </label>
                  <input type="submit" value="Submit" />
            </form>
            <button onClick={this.handleClick}> click Me !</button>
        </div>
        
      );
    }
}