import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './Party.css';
import { saveParty } from '../../util/ServerUtils';
import Alert from 'react-s-alert';

class Party extends Component {
  render() {

	  return (
      <div className = "party-container">
        <h1 className="party-title">Add Party Details</h1>

        <div className = "party-content">
           <PartyEntryForm {...this.props} />
        </div>

        <div className = "party-address">
          Introduction information
        </div>
      </div>
    );
 }
}

class PartyEntryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName: '',
            firstName: '',
            ssn: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName] : inputValue
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const partySaveRequest = Object.assign({}, this.state);

        saveParty(partySaveRequest)
        .then(response => {
            Alert.success("You're successfully added party. Do you want to add anotgher party!");
            this.props.history.push("/party");
        }).catch(error => {
            Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-item">
                    <input type="text" name="firstName"
                        className="form-control" placeholder="firstName"
                        value={this.state.firstName} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-item">
                    <input type="text" name="lastName"
                        className="form-control" placeholder="lastName"
                        value={this.state.lastName} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-item">
                    <input type="text" name="ssn"
                        className="form-control" placeholder="ssn"
                        value={this.state.ssn} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-item">
                    <button type="submit" className="btn btn-block btn-primary" >Sign Up</button>
                </div>
            </form>

        );
    }
}


export default Party;
