import React,{Component,useState} from 'react'

import Student from './Student'
function App()
{ const[name, setName]=useState("Hello")
  return(
    <div className="App">
      <h1>Props with Functional Component</h1>
      <button onClick={()=> setName("Welcome")}> Update</button>
      <Student name={name}/>

    </div>
  )
} export default App;

