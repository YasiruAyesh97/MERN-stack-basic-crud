import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from "axios";


export default class VehicleTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteVehicle = this.deleteVehicle.bind(this);
    }


    deleteVehicle() {
        axios.delete('http://localhost:4000/vehicles/delete-vehicle/' + this.props.obj._id)
            .then((res) => {
                console.log('Student successfully deleted!')
            }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.color}</td>
                <td>{this.props.obj.number}</td>
                <td>
                    <Link className="edit-link" to={"/edit-vehicle/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteVehicle} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}