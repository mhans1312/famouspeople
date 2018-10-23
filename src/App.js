import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import FamousPerson from './components/famousperson/famous'

class App extends Component {


  state = {
    famousPerson: {
      name: '',
      role: ''
    }
  }


  render() {
    return (
      <div className="App">
        <Header />
        <FamousPerson />
      </div>
    );
  }
}

export default App;
