//IT is a HoC here

import React from 'react';

function HigherOrderComponent(Component) {
  return (props) => {
    return (
      <>
        <h3>Hello Added from HoC</h3>
        {/* using {...props} we are passing our props to wrapped   Component */}
        <Component {...props} />
      </>
    );
  };
}
export default HigherOrderComponent;
