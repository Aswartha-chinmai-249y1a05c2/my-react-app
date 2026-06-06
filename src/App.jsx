// 1. Import useState alongside React
import React, { useState } from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  // 2. Define a state variable called 'count' initialized to 0
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      {/* Your working Props components */}
      <Greeting name="Aswar" /> 
      <Greeting name="Sir" />

      <hr style={{ margin: '20px auto', width: '50%' }} />

      {/* 3. Your new State implementation */}
      <h3>React State Example</h3>
      <p>Button clicked: <strong>{count}</strong> times</p>
      
      <button 
        onClick={() => setCount(count + 1)}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Click Me!
      </button>
    </div>
  );
}

export default App;