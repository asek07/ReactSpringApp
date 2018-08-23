import React, { Component } from 'react';
import './App.css';
import './bootstrap-theme.css';

class UserTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      success: null
    }

    this.showNotification = this.showNotification.bind(this);

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

  deleteUser(id) {
    fetch("http://localhost:8080/user/delete/" + id, {
      method: "POST"
    })
    .then(()=> {

      this.setState({
        success: true
      })

      setTimeout(()=> {
        this.setState({
          success: null
        })
        this.getUsers();
      }, 3000)
    });
  }

    showNotification() {
      if(this.state.success === true) {
        return <div className="alert alert-success" role="alert">
                  <h5 className="notification-message">Successfully deleted user from database.</h5>
               </div>
      }
      else if(this.state.success === null) {
        return;
      }
      else {
        return <div className="alert alert-danger" role="alert">
                  <h5 className="notification-message">Failed to delete user from database.</h5>
               </div>
      }
    }



show() {
  console.log(this.state.users.length);
  if(this.state.users.length > 0) {
    let userinfo = this.state.users.map((user) => {
      return(
        <tr key={user.user_id}>
                    <td className="col-sm-3 text-left">{user.user_id}</td>
                    <td className="col-sm-4 text-left">{user.name}</td>
                    <td className="col-sm-4 text-left">{user.fave_colour}</td>
                    <td className="col-sm-1 text-left">
                      <button className="btn btn-warning" onClick={() => this.deleteUser(user.user_id)}>
                        <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
                      </button>
                    </td>

               </tr>
      )
    });
    return userinfo;
  }
  else {
    return <tr>
              <td colSpan="4"><h5 className="text-center">Database empty</h5></td>
           </tr>
  }

}


  render() {
    return (
          <div className="container">
            <div className="col-md-6 col-lg-6 table-container">
              {this.showNotification()}
              <table className="table table-striped user-table">
              <thead>
                <tr>
                  <th className="col-sm-3">ID</th>
                  <th className="col-sm-4">Name</th>
                  <th className="col-sm-4">Favourite Colour</th>
                    <th className="col-sm-1"></th>
                </tr>
              </thead>
              <tbody>
                {this.show()}
              </tbody>
              </table>

            </div>
          </div>


    );
  }
}

export default UserTable;
