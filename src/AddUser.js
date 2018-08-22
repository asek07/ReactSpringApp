import React, { Component } from 'react';
import './bootstrap-theme.css';
import './App.css';

class AddUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      colour: ""
    }

    this.addUserToDB = this.addUserToDB.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleColourChange = this.handleColourChange.bind(this);
  }

  addUserToDB() {
    if(this.state.name !== "" && this.state.colour !== "") {
      fetch('http://localhost:8080/users/addUser', {
   method: 'POST',
   body: {
    "name": this.state.name,
    "colour": this.state.colour
   }
  });
 };
    }


  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
    console.log(this.state.name);
  }

  handleColourChange(event) {
    this.setState({
      colour: event.target.value
    });
    console.log(this.state.colour);
  }

  render() {
    return (
      <div className="container margined-container">
        <h1 className="add-heading">Enter your name and favourite colour</h1>


          <input type="text" className="form-control add-input" placeholder="Name" value={this.state.name}
          onChange={this.handleNameChange}/>


        <input type="text" className="form-control add-input" placeholder="Favourite Colour" value={this.state.colour}
        onChange={this.handleColourChange}/>

        <button className="btn btn-info" onClick={this.addUserToDB}>Add my info!</button>


      </div>
    );
  }
}

export default AddUser;
