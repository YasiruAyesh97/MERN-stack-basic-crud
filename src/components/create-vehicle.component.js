
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from "axios";

class CreateVehicle extends Component {
    constructor(props) {
        super(props);

        this.onChangeVehicleName =this.onChangeVehicleName.bind(this);
        this.onChangeVehicleColor =this.onChangeVehicleColor.bind(this);
        this.onChangeVehicleNumber =this.onChangeVehicleNumber.bind(this);
        this.onSubmit =this.onSubmit.bind(this);

        this.state={
            name:'',
            color:'',
            number:''
        }
    }
    onChangeVehicleName(e){
        this.setState({name:e.target.value});
    }
    onChangeVehicleColor(e){
        this.setState({color:e.target.value});
    }
    onChangeVehicleNumber(e){
        this.setState({number:e.target.value});
    }
    onSubmit(e){
        e.preventDefault()
        const vehicleObject={
            name:this.state.name,
            color:this.state.color,
            number:this.state.number
        };
        axios
            .post("http://localhost:4000/vehicles/create-vehicle",vehicleObject)
            .then(res => console.log(res.data))



        console.log('vehicle added')
        console.log(`name :${this.state.name}`);
        console.log(`color :${this.state.color}`);
        console.log(`number :${this.state.number}`);
        this.setState({
            name:'',
            color:'',
            number:''
        })
    }


    render() {
        return (
            <div className="container">

                <form className="row" onSubmit={this.onSubmit}>
                    <div className="col-12">
                        <label  className="form-label">Name</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeVehicleName}/>
                    </div>
                    <div className="col-12">
                        <label  className="form-label">Color</label>
                        <input type="text" className="form-control" value={this.state.color} onChange={this.onChangeVehicleColor}/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Number</label>
                        <input type="text" className="form-control" value={this.state.number} onChange={this.onChangeVehicleNumber}/>
                    </div>


                    <div className="col-12 mt-5">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateVehicle;
