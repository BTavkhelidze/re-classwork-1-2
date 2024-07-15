import React, { useState } from 'react';

function Card(props) {
  let randomNum = Math.floor(Math.random() * props.namesObj.length);

  const [name, setName] = useState([]);

  function randomName() {
    setName(() => {
      return [props.namesObj[randomNum]];
    });
  }

  console.log(name);

  return (
    <div>
      <p>Header</p>
      <button onClick={randomName}>Select Random Name</button>
      {name.length > 0 && <h1>Hello, {name} </h1>}
    </div>
  );
}

export default Card;
