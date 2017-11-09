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

    setOrders(data) {
        this.setState({
            orders: data
        });
    }

    renderOrders() {
        return this.state.orders.map((order, index) => {
            return (
                <tr key={index}>
                    <td>{order.firstName}</td>
                    <td>{order.lastName}</td>
                    <td >{order.address}</td>
                    <td>{order.city}</td>
                    <td>{order.zip}</td>
                    <td>{order.email}</td>
                    <td>{order.phone}</td>
                    <td >{order.notes}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div>
                <h3>All Orders</h3>
                <table>
                    <thead>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Address</td>
                    <td>City</td>
                    <td>Zip</td>
                    <td>Email</td>
                    <td>Phone</td>
                    <td>Notes</td>
                    </thead>
                    <tbody>
                    {this.renderOrders()}
                    </tbody>
                </table>
            </div>
        );
    }
}


export default AllAddresses;