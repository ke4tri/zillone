import React from 'react';
import './listingform.scss';
import {
  Col, Row, Button, Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';

class listingForm extends React.Component {
  render() {
    return (
      <div className="listingForm">
        <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input type="price" name="price" id="examplePrice" placeholder="Price to search" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input type="address" name="address" id="exampleAddress" placeholder="Address search" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup check>
          <Input type="checkbox" name="check" id="exampleCheck"/>
          <Label for="exampleCheck" check>Check me out</Label>
        </FormGroup>
        <Button>Search</Button>
      </Form>
      </div>
    );
  }
}

export default listingForm;
