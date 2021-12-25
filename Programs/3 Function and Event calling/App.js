import React from 'react'

function App()
{  
  function Call()
  {
    alert("Function Called")
  }
  return(
     <div className="App"> 
      <button onClick={()=> alert("Function Alert")}>Click </button>
      <button onClick={Call}>Call</button>
      </div>
     
  )
} export default App;
