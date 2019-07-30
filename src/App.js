import React, { Component } from 'react';
import CustomMap from './Containers/Map/CustomMap';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CustomMap />
      </React.Fragment>
    );
  }
}

export default App;
