import React from 'react';
import _ from 'underscore';
import Amenity from './Amenity';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basic: this.props.amenities.basic,
      dining: this.props.amenities.dining,
      notIncluded: this.props.amenities.notIncluded,
    };
  } 
  
  render() {
    return (
      <div>
        <h1>Basic</h1>
        {
            _.each(this.state.basic, (value, key) => <Amenity name={key} description={value} />)
          }
        <h1>Dining</h1>
          
        <h1>notIncluded</h1>

      </div> 
    );
  }
}
export default List;
