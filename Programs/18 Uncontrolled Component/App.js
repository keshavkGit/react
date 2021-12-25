import React,{useRef} from 'react'

function App()
{
  let inputRef1=useRef(null)
  let inputRef2=useRef(null)

  function submitForm(e)
  {
    e.preventDefault()

    let first=inputRef1.current.value="inputRef1"
     console.warn("input1:",first)
     
     console.warn("input2:",inputRef2.current.value="inputRef2")
     
     let input3=document.getElementById('input3').value="inputValue"
     console.warn("input3:",input3) 
  }
  return(
    <div className="App">
       <h1>Uncontrolled Component</h1>
       <form onSubmit={submitForm}>

         <input type="text" ref={inputRef1}/>
         <input type="text" ref={inputRef2}/>

         <input type="text" id="input3" />
         <button type="submit">Submit</button>
       </form>

    </div>
  )
} export default App;