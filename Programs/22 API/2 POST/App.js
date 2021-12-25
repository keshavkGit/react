import React,{useState} from 'react'

function App()
{
  const [name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[mobile,setMobile]=useState("")

  function saveUser()
  {
    console.warn({name,email,mobile})
    const data={name,email,mobile}
  

  fetch("http://localhost:8000/todo",{
     method:'POST',
     headers:{
       'Accept':'application/json',
       'Content-Type':'application/json'
     },
      'body':JSON.stringify(data)
  }).then((result)=>
  {
    console.warn("result",result)
    result.json().then((resp)=>
    {
      console.warn("resp",resp)
    })
  })
}

   return(
     <div className="App">
       <h1>POST Api</h1>
       <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
       <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
       <input type="text" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/>
       <button type="button" onClick={saveUser}>Save New User</button> 
     </div>
   )
} export default App;