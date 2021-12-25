
import React,{useEffect,useState} from 'react'

function App()
{
  const[User,setUser]=useState([])

  useEffect(()=>{
    getUser()
  },[])
  
  function getUser()
  {
    fetch("http://localhost:8000/todo").then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
        setUser(resp)
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
            </tr>
           {
             User.map((item,i)=>
             
               <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td><button onClick={()=>deleteUser(item.id)}>DELETE User</button></td>

               </tr>
             )
           } 
          </tbody>
        </table>
      </div>
    )

  } export default App;