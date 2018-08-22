import React, { Component } from 'react';
import UserTable from './UserTable.js';
import AddUser from './AddUser.js';

class App extends Component {

  constuctor() {

  }

  render() {
    return (
      <div className="App">

        <AddUser />
        <UserTable />
      </div>
    );
  }
}

export default App;
