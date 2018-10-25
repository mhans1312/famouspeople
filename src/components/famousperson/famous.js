import React, {Component} from 'react';

class FamousPerson extends Component {


    state = {
      famousPerson: {
        name: '',
        role: ''
      },
      famousList: []
    }
  
    // handleNameChange = (event) => {
    //   console.log(event.target.value);
    //   this.setState( {famousPerson: {
    //     ...this.state.famousPerson,
    //     name: event.target.value
    //   }})
    // }
  
    // handleRoleChange = (event) => {
    //   console.log(event.target.value);
    //   this.setState( {famousPerson: {
    //     ...this.state.famousPerson,
    //     role: event.target.value
    //   }})
    // }
  handleChangeFor = (propertyName) => {
    return (event) => {
      this.setState({
        famousPerson: {
          ...this.state.famousPerson,
          [propertyName]: event.target.value
        }
      })
    }
  }
  
handleSubmit = (event) => {
  event.preventDefault();
  console.log(this.state.famousPerson);
  this.setState({
    famousPerson: {
      name: '',
      role: '',
    },
  });
}

    render() {
      let listItemHtml = [];
      for(let i=0; i<this.state.famousList.length; i++){
        listItemHtml.push(<li>{this.state.famousList}</li>);
      }
      return (
        
        <div className="App">

            <section>
              <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChangeFor('name')} placeholder="Famous Person" />
                <input onChange={this.handleChangeFor('role')} placeholder="Role" />
                <input type="submit" value="Submit" />
              </form>
              <p>{this.state.famousPerson.name} is famous for {this.state.famousPerson.role}</p>
            </section>
            <pre>
              {JSON.stringify(this.state.famousList)}
            </pre>
            <ul>
              {listItemHtml}
            </ul>
        </div>
      );
    }
  }

  export default FamousPerson;