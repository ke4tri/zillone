import React, { Component } from 'react';
// import { Button } from 'reactstrap';
// import logo from './logo.svg';
import connection from '../helpers/data/connection';
import Auth from '../components/Auth/Auth';
import Listings from '.'
import './App.scss';
// import { createConnection } from 'net';

class App extends Component {
  componentDidMount() {
    connection();
  }

  render() {
    return ( // jsx is what return is written in
      <div className="App">
        <Auth />
      </div>
    );
  }
}

export default App;
