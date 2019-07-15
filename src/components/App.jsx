import React from 'react';
import axios from 'axios';
import Title from './Title';
import List from './List';
import Info from './Info';

class App extends React.Component {
  constructor({location}) {
    super(location);
    this.location = location;
    this.state = {
      listingInfo: {},
    }; // everything fetched from db is stored here as state?
  }


  // use axios to get an endpoint and console log the response
  // endpoint is /:listingId
  // looks like /123
  getDescription() {
    console.log(this.location);
    axios.get(this.location)
      .then((response) => {
        console.log(response);
        this.setState({
          listingInfo: response
        });
      })
      .catch((err) => {
        console.log(err);
      })
    }

  componentDidMount() {
    this.getDescription();
  }

  render() {
    return (
      <div>
        app app app 
        {/* <Title title={this.state.listingInfo.title} city={this.state.listingInfo.city}/>
        <List amenities={this.state.listingInfo.Amenities}/>
        <Info about={this.state.listingInfo.description} /> */}
      </div>
    )   
  } 
}

export default App; 