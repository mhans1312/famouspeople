import React, { Component } from 'react';
import './App.css';
import Header from '../header/header';
import FamousPerson from '../famousperson/famous'
import FamousList from '../FamousList/famouslist'

class App extends Component {


  state = {
    famousPerson: {
      name: '',
      role: '',
    },
    famousList: [],
  }

handleChangeFor = (propertyName) => (event) => {
  this.setState({
    newFamous: {
      ...this.state.newFamous,
      [propertyName]: event.target.value,
    }
  })
}

submitFamous = (event) => {
  event.preventDefault();
  console.log('saving new famous person', this.state.newFamous);
  this.setState({
    newFamous: {
      name: '',
      role: '',
    },
    famousList: [ ...this.state.famousList, this.state.newFamous ],
  })
}

  render() {
    return (
      <div>
        <Header />
        <FamousPerson submitFamous={this.submitFamous}
          handleChangeFor={this.handleChangeFor}
          newFamous={this.state.newFamous} />
        <FamousList list={this.state.famousList} />
      </div>
    );
  }
}

export default App;
