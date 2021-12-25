import React,{useState} from 'react'

function App()
{
  const[name,setName]=useState("")
  const[interest,setInterest]=useState(null)
  const[tnc,setTnc]=useState(false)
  const[print,setPrint]=useState(false)

  function getVal(e)
  {
     console.warn(name,interest,tnc)
      e.preventDefault()
      setPrint(false)
  }
  return(
    <div className="App">
      {
          print?<h4>{name}, {interest} Accepted</h4>:null
        }
      <form onSubmit={getVal}>
        
        <input type="text" placeholer="Enter Name" onChange={(e)=>setName(e.target.value)}/> <br/> <br/>
        <select onChange={(e)=>setInterest(e.target.value)}>
           
           <option>Select</option>
           <option>Marvel</option>
           <option>DC</option>
           <option>Other</option>

        </select>  <br/> <br/>
        <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/> 
             <span>Accept terms and Conditions</span>  <br/> <br/>
          <button type="submit" >Submit</button>   
          <button onClick={()=>setPrint(true)}>Print</button>

      </form>
    </div>
  )
} export default App;
