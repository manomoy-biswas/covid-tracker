import React, { Component } from 'react';
import {Cards, Chart, CountryPicker } from "./components";
import './App.css';
import { fetchData } from "./api";
import logo from "./Images/covid19.png"

class App extends Component {
  state = {
    data: {},
    country: '',
  }
  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({data: fetchedData})
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country})
  }
  render() {
    const { data, country } = this.state
    return (
      <div className="container">
        <h1 className="text-center"><img src={logo} className="logo" alt="Covid-19" /></h1>
        <br />
        <h2 className="text-center title">{this.state.country }</h2>
        <Cards data={ data }/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App
