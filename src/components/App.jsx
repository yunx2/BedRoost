import React from 'react';
import axios from 'axios';
import Title from './Title';
import List from './List';
import Info from './Info';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.location = location;
    // this.state = {
    //   listingInfo: {},
    // }; // everything fetched from db is stored here as state?
  }

  // async getDescription() {
  //     const result = await axios.get(this.location);
  //     try {
  //       console.log(result);
  //       this.setState({
  //         listingInfo: result
  //       });
  //     } catch (err) {
  //       console.log(err);
  //     }
  // }

  // componentDidMount(location) {
  //   this.getDescription(location);
  // }

  render() {
    return (
      <div>
        hello world
        {/* <Title title={this.state.listingInfo.title} city={this.state.listingInfo.city}/>
        <List amenities={this.state.listingInfo.Amenities}/>
        <Info about={this.state.listingInfo.description} /> */}
      </div>
    )   
  } 
}

export default App; 