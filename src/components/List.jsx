import React from 'react';
import _ from 'underscore';
import Amenity from './Amenity'

class List extends React.Component {
  constructor({amenities}) {
    super(amenities);
    this.state = {
      basic: amenities.basic,
      dining: amenities.dining,
      notIncluded: amenities.notIncluded,
    };
   }

  renderView() {
    
  } 
  
  render() {
    return (
      <div>
        <h1>Basic</h1>
        <div>
          {
            _.each(this.state.basic, (value, key) => {
              return <Amenity name={key} description={value} />
              })
          }

        </div>

      </div> 
    )
  }
}
export default List;