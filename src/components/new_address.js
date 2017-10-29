import React, {Component} from 'react';
import $ from 'jquery';

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
            notes: ""
        };
    }

    onSubmit(event) {
        event.preventDefault();
        // submit post
        let url = `http://localhost:3000/orders`;

        return $.ajax({
            type: 'POST',
            url: url,
            // dataType: 'jsonp', //todo: convert to get
            crossDomain: true,
            data: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                address: this.state.address,
                zip: this.state.zip,
                city: this.state.city,
                email: this.state.email,
                phone: this.state.phone,
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
                    notes: ""
                });
            },
        });


    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;


        this.setState({
            [name]: value
        });
    }

    /**
     validateEmail(value) {
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value);
    }
     **/

    render() {

        return (
            <form onSubmit={(this.onSubmit.bind(this))}>
                <h3>Create A New Gift Order</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type='text' className='form-control' name="firstName" value={this.state.firstName}
                           onChange={(event) => {
                               this.handleInputChange(event)
                           }}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type='text' className='form-control' name="lastName" value={this.state.lastName}
                           onChange={(event) => {
                               this.handleInputChange(event)
                           }}/>
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <input type='text' className='form-control' name="address" value={this.state.address}
                           onChange={(event) => {
                               this.handleInputChange(event)
                           }}/>
                </div>

                <div className="form-group">
                    <label>Zip code</label>
                    <input type='text' className='form-control' name="zip" value={this.state.zip} onChange={(event) => {
                        this.handleInputChange(event)
                    }}/>
                </div>

                <div className="form-group">
                    <label>City</label>
                    <input type='text' className='form-control' name="city" value={this.state.city}
                           onChange={(event) => {
                               this.handleInputChange(event)
                           }}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type='text' className='form-control' name="email" value={this.state.email}
                           onChange={(event) => {
                               this.handleInputChange(event)
                           }}/>
                </div>

                <div className="form-group">
                    <label>Phone number</label>
                    <input maxLength="10" type='text' className='form-control' name="phone" value={this.state.phone}
                           onChange={(event) => {
                               this.handleInputChange(event)
                           }}/>
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