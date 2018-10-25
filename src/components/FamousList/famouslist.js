import React, {Component} from 'react';

class FamousList extends Component {

render(){
    return(
        <section>
            <h2>All Famous People</h2>
            <ul>
                {this.props.list.map((famousPerson, index) => 
                    <li key={index}>{famousPerson.name} is famous for {famousPerson.role}</li>)}
            </ul>
        </section>
    )
}

}

export default FamousList;