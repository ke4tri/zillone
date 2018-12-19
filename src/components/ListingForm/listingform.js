import React from 'react';
import './listingform.scss';
import {
  Col, Row, Button, Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';

class listingForm extends React.Component {
  render() {
    return (
      <div className="listingForm col">
       <h2>Add New Listing:</h2>
       <form>
          <div className="form-group">
            <label for="address">Address :</label>
            <input 
            type="text" 
            className="form-control" 
            id="address" 
            aria-describedby="emailHelp" 
            placeholder="123 Main Street Nashville, Tn 37209" />
          </div>
          <button className="btn btn-danger">Save Listing</button>
        </form>
      </div>
    );
  }
}

export default listingForm;
