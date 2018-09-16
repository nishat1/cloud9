import React, { Component } from 'react';
import './App.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import AppCards from './components/appCards';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Featured />
        <AppCards />
      </div>
    );
  }
}

export default App;
