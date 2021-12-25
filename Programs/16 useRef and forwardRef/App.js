import React,{useRef} from 'react'
import Student from './Student'

function App()
{
  const inputRef=useRef(null)

  function handleInput()
  {
    console.warn("function called")
    inputRef.current.value="world"
  }
  return(
    <div className="App">
      <h1>useRef in React</h1>
    
      <input type="text" ref={inputRef} />

      <h1>Forward Ref </h1> 

      <Student ref={inputRef}/>
      <button onClick={handleInput}>change value</button>
      
    </div>
  )
} export default App;