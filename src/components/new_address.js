import React, {Component} from 'react';
import _ from 'lodash';
import $ from 'jquery';

const BASE_URL = 'http://localhost:3000';

class NewAddress extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            address: "",
            zip: "",
            city: "",
            email: "",
            phone: "",
            state: "",
            notes: ""
        };
    }


    checkAddressAndSubmit(event) {
        event.preventDefault()
        let url = `${BASE_URL}/validate?AddressLine1=${this.state.address}&AddressLine2=${this.state.city} ${this.state.state} ${this.state.zip}`;
        url = encodeURI(url);

        return $.ajax({
            type: 'GET',
            url: url,
            datatype: 'jsonp',
            crossDomain: true,
            success: this.submit.bind(this)
        });
    }

    submit(res) {
        let url = `${BASE_URL}/orders`;

        if (res.valide === true) {
            return $.ajax({
                type: 'POST',
                url: url,
                crossDomain: true,
                headers: {'Access-Control-Allow-Origin': '*'},
                data: {
                    firstName: _.capitalize(this.state.firstName),
                    lastName: _.capitalize(this.state.lastName),
                    address: this.state.address,
                    zip: this.state.zip,
                    city: this.state.city,
                    email: this.state.email,
                    phone: this.state.phone,
                    state: this.state.state,
                    notes: this.state.notes
                },
                complete: () => {
                    this.setState({
                        firstName: "",
                        lastName: "",
                        address: "",
                        zip: "",
                        city: "",
                        email: "",
                        phone: "",
                        state: "",
                        notes: ""
                    });
                },
            });
        } else {
            alert(res.valide);
            let state = this.state;
            state.state = res.valide.includes("state")? "": state.state;
            state.city = res.valide.includes("city")? "": state.city;
            state.address = res.valide.includes("address")? "": state.address;
            state.zip = res.valide.includes("Zip")? "": state.zip;
            this.setState(state);
        }
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {

        return (
            <form onSubmit={(this.checkAddressAndSubmit.bind(this))}>
                <h3>Create A New Gift Order</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type='text' className='form-control' name="firstName" value={this.state.firstName}
                           onChange={(event) => {
                               this.handleInputChange(event)
                           }}
                           required/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type='text' className='form-control' name="lastName" value={this.state.lastName}
                           onChange={(event) => {
                               this.handleInputChange(event)
                           }}
                           required/>
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <input type='text' className='form-control' name="address" value={this.state.address}
                           onChange={(event) => {
                               this.handleInputChange(event)
                           }}
                           required/>
                </div>

                <div className="form-group">
                    <label>Zip code</label>
                    <input type='text' size="5" className='form-control' name="zip" value={this.state.zip}
                           pattern="[0-9]{5}" title="Zip must have 5 digits"
                           onChange={(event) => {
                               this.handleInputChange(event)
                           }}
                           required/>
                </div>

                <div className="form-group">
                    <label>City</label>
                    <input type='text' className='form-control' name="city" value={this.state.city}
                           onChange={(event) => {
                               this.handleInputChange(event)
                           }}
                           required/>
                </div>

                <div className="form-group">
                    <label>State</label>
                    <input type='text' className='form-control' name="state" value={this.state.state}
                           onChange={(event) => {
                               this.handleInputChange(event)
                           }}
                           required/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type='email' className='form-control' name="email" value={this.state.email}
                           onChange={(event) => {
                               this.handleInputChange(event)
                           }}
                           required/>
                </div>

                <div className="form-group">
                    <label>Phone number</label>
                    <input type='text' className='form-control' name="phone" value={this.state.phone}
                           pattern="[0-9]{10}" title="Phone must have 10 digits"
                           onChange={(event) => {
                               this.handleInputChange(event)
                           }}
                           required/>
                </div>

                <div className="form-group">
                    <label>Special notes</label>
                    <textarea maxLength="500" className='form-control' name="notes" value={this.state.notes}
                              onChange={(event) => {
                                  this.handleInputChange(event)
                              }}/>
                </div>

                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        );
    }
}

export default NewAddress;