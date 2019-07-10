import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor({location}) {
    super(location);
    this.state = {}; // everything fetched from db is stored here as state?
  }

  async getDescription(path) {
    try {
      const result = await axios.get(path);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount(location) {
    this.getDescription(location);
  }


  render() {
    return(
      <div>
        <p> { location } </p>
      
      </div>
    )   
  } 
}

export default App; 