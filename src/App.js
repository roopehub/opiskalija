import React, { Component } from 'react';
import CustomMap from './Containers/Map/CustomMap';
import './App.css';
import HttpsRedirect from './Hoc/HttpsRedirect/HttpsRedirect'

class App extends Component {
  render() {
    return (
      <HttpsRedirect>
        <CustomMap />
      </HttpsRedirect>
    );
  }
}

export default App;
