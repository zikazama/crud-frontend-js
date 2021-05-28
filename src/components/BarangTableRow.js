import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class BarangTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteBarang = this.deleteBarang.bind(this);
    }

    deleteBarang() {
        axios.delete('http://localhost:5000/barang/' + this.props.obj.id_barang)
            .then((res) => {
                console.log('Barang successfully deleted!')
                return <Redirect to='/barang-list'  />
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.nama}</td>
                <td>{this.props.obj.harga}</td>
                <td>
                    <Link className="edit-link" to={"/edit-barang/" + this.props.obj.id_barang}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteBarang} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}