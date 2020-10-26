import logo from './logo.svg';
import UserCard from "./components/Usercard";
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: 1
    };
  }
  
  addUser = () => {
    this.setState({users: this.state.users + 1})
  }
  render() {
  let userList = []
  for (let index = 0; index < this.state.users; index++) {
    userList.push(<UserCard/>)
      }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {userList}
          <button onClick = {this.addUser}>Add User!</button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}

export default App;
