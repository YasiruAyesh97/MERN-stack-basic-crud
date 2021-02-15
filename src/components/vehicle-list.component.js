import React, {Component} from 'react';

import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import VehicleTableRow from './VehicleTableRow';

class VehicleList extends Component {
    constructor() {
        super();
        this.state={
            vehicles:[]
        }
    }

    componentDidMount() {
        axios.get("http://localhost:4000/vehicles/")
            .then(res => {
                this.setState({
                    vehicles: res.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    DataTable() {
        return this.state.vehicles.map((res, i) => {
            return <VehicleTableRow obj={res} key={i} />;
        });
    }

    render() {
        return (
            <div>
                list component
                <table className="table table-dark table-sm">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Color</th>
                        <th>Number</th>

                    </tr>
                    </thead>
                    <tbody>
                    {this.DataTable()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default VehicleList;