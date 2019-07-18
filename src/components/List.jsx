import React from 'react';
import Amenity from './Amenity';

const List = ({ amenities }) => {
  const keysBasic = Object.keys(amenities.basic);
  const keysDining = Object.keys(amenities.dining);
  const keysNotIncluded = Object.keys(amenities.notIncluded);
  
  return (  
    <div> 
      <p>Basic</p>
      {/* {console.log(amenities.basic)} */}
      <Amenity name={keysBasic[0]} description={amenities.basic[keysBasic[0]]} />
      <p>Dining</p>
      <Amenity name={keysDining[0]} description={amenities.dining[keysDining[0]]} />
      <p>notIncluded</p>
      <Amenity name={keysNotIncluded[0]} description={amenities.notIncluded[keysNotIncluded[0]]} />
    </div>  
  ); 
};

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
