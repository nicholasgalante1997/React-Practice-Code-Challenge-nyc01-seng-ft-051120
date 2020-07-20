import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Sushi from './components/Sushi';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: []
  }

  fetchSushi = () => {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => 
      this.setState({
        sushi: sushis
      })
      )
  }

  componentDidMount(){
    this.fetchSushi()
  }


  render() {
    return (
      <div className="app">
        <SushiContainer/>
        <Table />
      </div>
    );
  }
}

export default App;