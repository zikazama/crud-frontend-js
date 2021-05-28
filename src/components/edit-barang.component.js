import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditBarang extends Component {

  constructor(props) {
    super(props)

    this.onChangeBarangName = this.onChangeBarangName.bind(this);
    this.onChangeBarangPrice = this.onChangeBarangPrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      nama: '',
      harga: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/barang/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          nama: res.data.nama,
          harga: res.data.harga
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeBarangName(e) {
    this.setState({ nama: e.target.value })
  }

  onChangeBarangPrice(e) {
    this.setState({ harga: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const barangObject = {
      nama: this.state.nama,
      harga: this.state.harga
    };

    axios.put('http://localhost:5000/barang/' + this.props.match.params.id, barangObject)
      .then((res) => {
        console.log(res.data)
        console.log('Barang successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    this.props.history.push('/barang-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.nama} onChange={this.onChangeBarangName} />
        </Form.Group>

        <Form.Group controlId="Price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" value={this.state.harga} onChange={this.onChangeBarangPrice} />
        </Form.Group>

        <br/>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Barang
        </Button>
      </Form>
    </div>);
  }
}