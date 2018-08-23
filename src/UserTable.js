import React, { Component } from 'react';
import './App.css';
import './bootstrap-theme.css';

class UserTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: null
    }
  }

  componentWillMount() {

    // axios
    fetch("http://localhost:8080/allusers")
    .then(results => {
      return results.json();
    })
    .then(data => {
      this.setState({
        users: data
      })
      console.log("users", this.state.users);
    });
  }

  getUsers() {
    fetch("http://localhost:8080/allusers")
    .then(results => {
      return results.json();
    })
    .then(data => {
      this.setState({
        users: data
      })
      console.log("users", this.state.users);
    });
  }

show() {
  console.log(this.state);
  if(this.state.users) {
    let userinfo = this.state.users.map((user) => {
      return(
        <tr key={user.user_id}>
                    <td className="col-sm-3 text-left">{user.user_id}</td>
                    <td className="col-sm-4 text-left">{user.name}</td>
                    <td className="col-sm-5 text-left">{user.fave_colour}</td>
               </tr>
      )
    });
    return userinfo;
  }

}


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12 table-container">
            <table className="table table-striped user-table">
            <thead>
              <tr>
                <th className="col-sm-3">ID</th>
                <th className="col-sm-4">Name</th>
                <th className="col-sm-5">Favourite Colour</th>
              </tr>
            </thead>
            <tbody>
              {this.show()}
            </tbody>
            </table>

          </div>

        </div>
      </div>
    );
  }
}

export default UserTable;
