import './App.css'
import React,{useEffect,useState} from 'react'

function App()
{
  const[User,setUser]=useState([])
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[mobile,setMobile]=useState("")

  useEffect(()=>{
    getUser()
  },[])
  
  function getUser()
  {
    fetch("http://localhost:8000/todo").then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
        setUser(resp)
        setName(resp[0].name)
        setEmail(resp[0].email)
        setMobile(resp[0].setMobile)
      })
    })
  }


function deleteUser(id)
{
      fetch(`http://localhost:8000/todo/${id}`,{
         method: 'DELETE'
        }).then((result)=>{
        result.json().then((resp)=>
        {
        console.warn(resp) 
       getUser()
       })
     })
    }
  
  
   function updateUser(id) 
  
   { 
     console.warn(User[id-1])
     let item=User[id-1]
       setName(item.name)
       setEmail(item.email)
       setMobile(item.mobile)
   }
    return(
      <div className="App">
        <h1>DELETE data with api call</h1>
        <table border="1" style={{float:'left'}}>
          <tbody>
            <tr>
              <td>id</td>
              <td>Name</td>
              <td>Email</td>
              <td>Mobile</td>
              <td>Operations</td>
            </tr>
           {
             User.map((item)=>
             
               <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  
                  <td><button onClick={()=>deleteUser(item.id)}>DELETE</button></td>
                  <td> <button onClick={()=>updateUser(item.id)}>Update</button></td>
              </tr>
             )
           } 
          </tbody> 
        </table>
        <div>
          <input type="text" value={name}/>
          <input type="text" value={email}/>
          <input type="text" value={mobile}/>
        </div>
      </div>
    )

  } export default App;