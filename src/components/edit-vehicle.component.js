
import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';


class EditVehicle extends Component {

    constructor() {
        super();


        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
        this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // State
        this.state = {
            name: '',
            color: '',
            number: ''
        }

    }

    componentDidMount() {
        axios.get('http://localhost:4000/vehicles/edit-vehicle/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    name: res.data.name,
                    color: res.data.color,
                    number: res.data.number
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeStudentName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeStudentEmail(e) {
        this.setState({ color: e.target.value })
    }

    onChangeStudentRollno(e) {
        this.setState({ number: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const vehicleObject = {
            name: this.state.name,
            color: this.state.color,
            number: this.state.number
        };
        console.log("onsubmit cliked")
        axios.put('http://localhost:4000/vehicles/update-vehicle/' + this.props.match.params.id, vehicleObject)
            .then((res) => {
                console.log(res.data)
                console.log('vehicle successfully updated')
            }).catch((error) => {
            console.log('vehicle not updated')
            console.log(error)
        })

        // Redirect to Student List
        this.props.history.push('vehicle-list')
    }


    render() {
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} />
                    </Form.Group>

                    <Form.Group controlId="Email">
                        <Form.Label>Color</Form.Label>
                        <Form.Control type="text" value={this.state.color} onChange={this.onChangeStudentEmail} />
                    </Form.Group>

                    <Form.Group controlId="Name">
                        <Form.Label>Number </Form.Label>
                        <Form.Control type="text" value={this.state.number} onChange={this.onChangeStudentRollno} />
                    </Form.Group>

                    <Button variant="danger" size="lg" block="block" type="submit">
                        Update Vehicle
                    </Button>
                </Form>
            </div>
        );
    }
}

export default EditVehicle;