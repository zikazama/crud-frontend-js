import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class BarangTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteBarang = this.deleteBarang.bind(this);
    }

    deleteStudent() {
        axios.delete('http://localhost:5000/barang/' + this.props.obj._id)
            .then((res) => {
                console.log('Barang successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>
                    <Link className="edit-link" to={"/edit-barang/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteBarang} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}