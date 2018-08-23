import React, { Component } from 'react';
import UserTable from './UserTable.js';
import AddUser from './AddUser.js';

class App extends Component {

  constuctor() {

  }

  render() {
    return (
      <div className="container margined-container">
        <div className="row">
          <AddUser />
          <UserTable />
        </div>
      </div>
    );
  }
}

export default App;
