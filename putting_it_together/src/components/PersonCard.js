import React, {Component} from 'react';


class PersonCard extends Component {
   constructor(props) {
       super(props);
       this.state = {
           newAge : props.age
       };
   }
    render(){
        return(
<div>
    <h1>{this.props.firstName}, {this.props.lastName}</h1>
    <p>Age: {this.state.newAge}</p>
    <p>Hair Color: {this.props.hairColor}</p>

    <button onClick = { () =>  this.setState({ newAge: this.state.newAge + 1})} >Birthday Button for {this.props.lastName} {this.props.firstName}</button>
</div>
        );

    }
}

export default PersonCard;