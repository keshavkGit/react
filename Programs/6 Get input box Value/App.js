import React, {useState} from 'react'

function App()
{
  const[data,setData]=useState(null)
  const[print,setPrint]=useState(false)

  function getVal(val)
  { 
    console.warn(val.target.value)
    setData(val.target.value)
  }

  return(
    <div className="App">
      <h1>Get Box Value</h1>
      {
      print?<h4>{data}</h4>:null
       }

      <input type="text" onChange={getVal}/>
      <button onClick={()=>setPrint(true)}>Update</button>

    </div>
  )
} export default App;
