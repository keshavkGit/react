import React,{useState} from 'react'

function App()
{
  const [data,setData]=useState("variable")

  function Update()
  {
    setData("State")
  }
  return(
    <div className="App">
      <h1>Use of State</h1>
      <h4>{data}</h4>
      <button onClick={Update}>Update</button>
      <button onClick={()=> setData("Const")}>Change</button>
    </div>
    
  )
} export default App;

