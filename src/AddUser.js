import React, { Component } from 'react';
import './bootstrap-theme.css';
import './App.css';

class AddUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      fave_colour: "",
      success: null
    }

    this.addUserToDB = this.addUserToDB.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleColourChange = this.handleColourChange.bind(this);
    this.showNotification = this.showNotification.bind(this);
  }

  addUserToDB() {
    let inputName = this.state.name.trim();
    let inputColour = this.state.fave_colour.trim();
    if(inputName !== "" && inputColour !== "") {
      fetch('http://localhost:8080/users/addUser?name=' + this.state.name +"&fave_colour=" + this.state.fave_colour, {
       method: 'POST',
       body: {
        "name": this.state.name,
        "fave_colour": this.state.fave_colour
       }
      });

      this.setState({
        success: true
      })

      setTimeout(()=> {
        this.setState({
          success: null
        })
        window.location.reload();
      }, 3000)

     }
     else {
       this.setState({
         name: "",
         fave_colour: ""
       })
     }
    }

    showNotification() {
      if(this.state.success === true) {
        return <div className="alert alert-success" role="alert">
                  <h6 className="notification-message">Successfully added {this.state.name} to database.</h6>
               </div>
      }
      else if(this.state.success === null) {
        return;
      }
      else {
        return <div className="alert alert-danger" role="alert">
                  <h6 className="notification-message">Failed to add {this.state.name} to database.</h6>
               </div>
      }
    }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
    console.log(this.state.name);
  }

  handleColourChange(event) {
    this.setState({
      fave_colour: event.target.value
    });
    console.log(this.state.fave_colour);
  }

  render() {
    return (

          <div className="col-md-6 col-lg-6">
            <h1 className="add-heading">Enter your name and favourite colour</h1>

              {this.showNotification()}

              <input type="text" className="form-control add-input" placeholder="Name"
                value={this.state.name} onChange={this.handleNameChange}/>

              <input type="text" className="form-control add-input" placeholder="Favourite Colour"
                value={this.state.fave_colour} onChange={this.handleColourChange}/>

            <button className="btn btn-info" onClick={this.addUserToDB}>Add my info!</button>


          </div>

    );
  }
}

export default AddUser;
