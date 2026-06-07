import React from 'react';
import child from './Child'; // This imports the Child component

function Parent() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', color: '#000' }}>
      <h2>I am the Parent Component</h2>
      {/* Rendering the Child component inside Parent */}
      <Child /> 
    </div>
  );
}

export default Parent;