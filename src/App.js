import React from 'react';
import './style.css';
import HOC from './wrappedComponent';

function App(props) {
  return (
    <div>
      <h3>This is App Component {(props.componentName, props.value)}</h3>
    </div>
  );
}
export default HOC(App);
