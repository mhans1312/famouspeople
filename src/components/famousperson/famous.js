import React, {Component} from 'react';

class FamousPerson extends Component {


    state = {
      famousPerson: {
        name: '',
        role: ''
      }
    }
  
    handleNameChange = (event) => {
      console.log(event.target.value);
      this.setState( {famousPerson: {
        ...this.state.famousPerson,
        name: event.target.value
      }})
    }
  
    handleRoleChange = (event) => {
      console.log(event.target.value);
      this.setState( {famousPerson: {
        ...this.state.famousPerson,
        role: event.target.value
      }})
    }
  
  
    render() {
      return (
        
        <div className="App">

            <section>
              <input onChange={this.handleNameChange} placeholder="Famous Person" />
              <input onChange={this.handleRoleChange} placeholder="Role" />
              <p>{this.state.famousPerson.name} is famous for {this.state.famousPerson.role}</p>
            </section>
            
        </div>
      );
    }
  }

  export default FamousPerson;