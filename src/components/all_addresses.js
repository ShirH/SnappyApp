import React, {Component} from 'react';
import $ from 'jquery';

class AllAddresses extends Component {

    constructor(props) {
        super(props);

        this.state = {
            orders: []
        };
    }

    componentWillMount() {
        let url = `http://localhost:3000/orders`;

        return $.ajax({
            type: 'GET',
            url: url,
            dataType: 'jsonp',
            crossDomain: true,
            success: this.setOrders.bind(this)
        });
    }
    setOrders(data){
        this.setState({
            orders: data
        });
    }

    renderOrders() {
        return this.state.orders.map((order, index) => {
            return (
                <li className="list-group-item" key={index}>
                    <div>
                        <span className="col-md-1">{order.firstName}</span>
                        <span className="col-md-1">{order.lastName}</span>
                        <span className="col-md-3">{order.address}</span>
                        <span className="col-md-1">{order.city}</span>
                        <span className="col-md-1">{order.zip}</span>
                        <span className="col-md-1">{order.email}</span>
                        <span className="col-md-1">{order.phone}</span>
                        <span className="col-md-3">{order.notes}</span>
                    </div>
                </li>
            );
        });
    }

    render() {
        return (
            <div>
                <h3>All Orders</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <div>
                            <span className="col-md-1">First Name</span>
                            <span className="col-md-1">Last Name</span>
                            <span className="col-md-3">Address</span>
                            <span className="col-md-1">City</span>
                            <span className="col-md-1">Zip</span>
                            <span className="col-md-1">Email</span>
                            <span className="col-md-1">Phone</span>
                            <span className="col-md-3">Notes</span>
                        </div>
                    </li>
                    {this.renderOrders()}
                </ul>
            </div>
        );
    }
}


export default AllAddresses;