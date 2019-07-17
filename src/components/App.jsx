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
    this.state = {listingInfo: false}; 
  }

  componentDidMount() {
    this.getDescription();
  }
  
  getDescription() {
    axios.get('/rooms/162725')
      .then((response) => {
        this.setState({
          listingInfo: response.data,
        });
      })
      // .then(() => console.log(this.state.listingInfo.amenities.basic))
      .catch((err) => {
        console.log(err);
      });
  }
 
  render() {
    if (this.state.listingInfo) {
      console.log(this.state.listingInfo.amenities)
      return (
        <div>
          <Title title={this.state.listingInfo.title} city={this.state.listingInfo.city} />
          
          <List amenities={this.state.listingInfo.amenities} />
          <Info about={this.state.listingInfo.description} />
        </div>
      ); 
    } 
    return null;
  }
} 

export default App;
