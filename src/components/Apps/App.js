import React, { Component } from 'react';
import './App.css';
import Header from '../header/header';
import FamousPerson from '../famousperson/famous'
import FamousList from '../FamousList/famouslist'
import AboutPage from '../AboutPage/AboutPage';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

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
      <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/AboutPage">About Page</Link></li>
          </ul>
        </nav>
        <Header />
        <Route exact path="/AboutPage" Component={AboutPage} />
        <FamousPerson submitFamous={this.submitFamous}
          handleChangeFor={this.handleChangeFor}
          newFamous={this.state.newFamous} />
        <FamousList list={this.state.famousList} />
      </div>
      </Router>
    );
  }
}

export default App;
