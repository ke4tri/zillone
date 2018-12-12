import React from 'react';
import './listingForm.scss';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class listingForm extends React.Component {
  render() {
    return (
      <div className="listingForm">
        <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
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
