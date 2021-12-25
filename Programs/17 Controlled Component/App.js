import React,{useState} from 'react'

function App()
{ let [val,setVal]=useState("0")

  return(
    <div classname="App">
      <h1>Controlled Component</h1>
      
      <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} />

       <h1>value={val}</h1>

    </div>
  )
} export default App;