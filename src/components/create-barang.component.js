import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateBarang extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeBarangName = this.onChangeBarangName.bind(this);
    this.onChangeBarangPrice = this.onChangeBarangPrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      nama: '',
      harga: ''
    }
  }

  onChangeBarangName(e) {
    this.setState({nama: e.target.value})
  }

  onChangeBarangPrice(e) {
    this.setState({harga: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    const barangObject = {
      nama: this.state.nama,
      harga: this.state.harga
    };
    axios.post('http://localhost:5000/barang', barangObject)
      .then(res => console.log(res.data));

    this.setState({nama: '', harga: ''})
  }

  render() {
    return (<div class="form-wrapper">
      <Form>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group controlId="Price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <br/>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Barang
        </Button>
      </Form>
    </div>);
  }
}