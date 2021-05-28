import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import BarangTableRow from './BarangTableRow';


export default class BarangList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      barang: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/barang/')
      .then(res => {
        this.setState({
          barang: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.barang.map((res, i) => {
      return <BarangTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}