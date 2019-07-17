/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import Title from './Title';
import List from './List';
import Info from './Info';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.location = props.location;
    this.state = {
      listingInfo: {},
    }; // everything fetched from db is stored here as state?
  }

  // use axios to get an endpoint and console log the response
  // endpoint is /:listingId
  // looks like /123

  componentDidMount() {
    this.getDescription();
  }
  
  getDescription() {
    console.log('/rooms/162725');
    axios.get('/rooms/162725')
      .then((response) => {
        console.log(response);
        this.setState({
          listingInfo: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
 

  render() {
    return (
      <div>
        <Title title={this.state.listingInfo.title} city={this.state.listingInfo.city} />
        {/* <List amenities={this.state.listingInfo.Amenities} /> */}
        <Info about={this.state.listingInfo.description} />
      </div>
    ); 
  }
}

export default App;
