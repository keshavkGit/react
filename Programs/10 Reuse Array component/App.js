import React from 'react'
import Student from './Student'

function App()
{
  const Students=[{name:'anil',email:'anil@test.com'},
                  {name:'sam',email:'sam@test.com'}]
  return(
    <div className="App">
      <h1>Reuse array component</h1>
      {
        Students.map((data)=>
       
       <Student item={data}/> )
        
      }

    </div>
  )
}export default App;