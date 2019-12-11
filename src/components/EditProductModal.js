import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';


export class EditProductModal extends Component {
    constructor(props){
        super(props);
    }



handleSubmit(event){
  event.preventDefault();
  fetch('http://localhost:8080/api/products',{
    method:'PUT',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      id:event.target.id.value,
      name: event.target.name.value,
      category: event.target.category.value,
      price: event.target.price.value,
      imageurl: event.target.imageurl.value,

    })
  })
  .then(res=> res.json())
  .then((result)=>
  {
      alert('You Have Successfully Updated product');
 
  },
  (error)=>{
    alert('Failed To Edit Product')
  
  }
  )
}

render(){
return(
    <Modal
    {...this.props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Edit Product
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <div className="container">
     <Row>
        <Col sm={6}>
          <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="id">
              <Form.Label>Product id</Form.Label>
              <Form.Control
                type="text"
                name="id"
                required
                defaultValue = {this.props.productid}
                disabled

                placeholder="Product ID"
                />
            </Form.Group>

            <Form.Group controlId="name">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                required
                defaultValue = {this.props.productname}
                placeholder="Product Name"
                />
            </Form.Group>
            <Form.Group controlId="category">
              <Form.Label>Product Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                required
                defaultValue = {this.props.productcategory}
                placeholder="Product Category"
                />
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="text"
                name="price"
                required
                defaultValue = {this.props.productprice}
                placeholder="Product Name"
                />
            </Form.Group>
            <Form.Group controlId="imageurl">
              <Form.Label>Product Image URl</Form.Label>
              <Form.Control
                type="text"
                name="imageurl"
                required
                defaultValue = {this.props.productimageurl}
                placeholder="Product Image URL"
                />
            </Form.Group>
            <Form.Group>
              <Button variant="primary" type="submit">
                Edit Product
              </Button>
            </Form.Group>
          </Form>
          </Col>
        </Row>
    </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="success" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
);

}}