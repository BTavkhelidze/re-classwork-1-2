import React from 'react'




function App() {
  return (
    <div>
      <Classwork1 />
    </div>
  )
}


 
  



function Classwork1  (){
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

  let randomNum = Math.floor(Math.random() * names.length );


  
  return(
    <>
       <h1>Classwork 1</h1>
       <p>Hello, {names[randomNum]} </p>
    </>
  )
}





export default App
