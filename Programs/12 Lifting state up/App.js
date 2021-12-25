import React from 'react'
import Student from './Student'

function App()
{
  function parentAlert(data)
  {
    console.log(data);
    alert(data);
  }
  return(
    <div className="App">
      <h1>Lifting state up</h1>
       <Student alert={parentAlert}/>
    </div>
  )
} export default App;