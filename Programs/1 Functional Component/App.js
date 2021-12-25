
import React from 'react'
import Student from './Student'

function App()
{
  return(
    <div className="App">
      <h1>Functional component</h1>
      <Student></Student>
      <User/>
    </div>
  );
}

function User()
{
  return(
    <h4>User component</h4>
  )
} export default App;