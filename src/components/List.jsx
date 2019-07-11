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
  
  render() {
    return (
      <div>
        <h1>Basic</h1>
          {
            _.each(this.state.basic, (value, key) => {
              return <Amenity name={key} description={value} />
              })
          }
        <h1>Dining</h1>
        {
          _.each(this.state.basic, (value, key) => {
            return <Amenity name={key} description={value} />
            })
        }
         <h1>notIncluded</h1>
        {
          _.each(this.state.basic, (value, key) => {
            return <Amenity name={key} description={value} />
            })
        }
      </div> 
    )
  }
}
export default List;