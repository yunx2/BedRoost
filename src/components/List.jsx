import React from 'react';
import Amenity from './Amenity';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amenities: {
        basic: {},
        dining: {},
        notIncluded: {},
      },
    };
    // console.log(this.state.amenities.basic);
  }

  testFn(obj) {
    const keys = Object.keys(obj);
    keys.map((key) => (
      <Amenity name={key} description={obj[key]} />
    ));
  }

  render() {
    return (
      <div>
        <h1>Basic</h1>
        {/* {this.testFn(this.state.amenities.basic)}    */}
        <h1>Dining</h1>
        <h1>notIncluded</h1>
      </div>    
    );
  }
}
  

export default List;


/*

1. App.jsx is loaded into index.html at #app (1)
2. When app is mounted, componentDidMount will be invoked (2)
3. Inside componentDidMount there is an async function (axios) (3)
4. When App loads in, react invokes render of App immediately (4)
5. In App's render there is another component called List which is then added to the DOM (mounted)(5)
6. List's render function (if stateful) will run (6)
7. Axios call completes (25)
8. state is set in axios then block (26)
9. state change triggers a rerender of List (27)

var listingInfo = {};
console.log(listingInfo.amenities);
console.log(listingInfo.YunYun);
console.log(listingInfo.amenities.basic);

*/
