import React from 'react';
import Card from './card/Card.jsx';

function App() {
  const names = [
    'Alice',
    'Bob',
    'Charlie',
    'Diana',
    'Evan',
    'Fiona',
    'George',
    'Hannah',
    'Ian',
    'Julia',
  ];

  return (
    <div>
      {/* <h1>ss</h1> */}
      <Card namesObj={names} />
    </div>
  );
}

export default App;
