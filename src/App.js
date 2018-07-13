import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Dashboard from './components/Dashboard/Dashboard.js';
import Form from './components/Form/Form.js';
import Header from './components/Header/Header.js'
import Product from './components/Product/Product.js'


class App extends Component {
  constructor(){
    super()
    this.state = {
      input: ''
    }
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(e){
    this.setState({input: e.target.value})
  }

  ClearFields(){
    document.getElementById("textfield1").value = "";
    document.getElementById("textfield2").value = "";
    document.getElementById("textfield3").value = "";
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <div>
        <Product />
        <Dashboard />
        <Form />
        <Header />
        </div>
        <input type="text" id="textfield1"onChange ={(e) => this.handleInput(e)}/>
        <input type="text" id="textfield2"onChange ={(e) => this.handleInput(e)}/>
        <input type="text" id="textfield3"onChange ={(e) => this.handleInput(e)}/>
        <button type="button" onclick="ClearFields();">Clear</button>
      </div>
    );
  }
}

export default App;
