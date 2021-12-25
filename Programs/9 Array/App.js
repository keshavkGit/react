import React from 'react'
import {Table} from 'react-bootstrap'

function App()
{
  const Students=[
          {names:'Anil',email:'anil@test.com', address:[
                    {Hn:'10',city:'Noida'},
                    {Hn:'11', city:'Gurugram'},
                    {Hn:'22',city:'Noida'},
                    {Hn:'12',city:'Gurugram'}]
                  },
         { names:'Sam',email:'sam@test.com',address:[
                      {Hn:'10',city:'Noida'},
                      {Hn:'11', city:'Gurugram'},
                      {Hn:'22',city:'Noida'},
                      {Hn:'12',city:'Gurugram'}]
                    },
         { names:'Peter',email:'peter@test.com',address:[
                 {Hn:'10',city:'Noida'},
                 {Hn:'11', city:'Gurugram'},
                 {Hn:'22',city:'Noida'},
                 {Hn:'12',city:'Gurugram'}]
                    },
          {names:'Sidhu',email:'sidhu@test.com',address:[
               {Hn:'10',city:'Noida'},
               {Hn:'11', city:'Gurugram'},
               {Hn:'22',city:'Noida'},
               {Hn:'12',city:'Gurugram'}]
              }
              ];
  return(
    <div className="App">
      <h1>Array with nested list</h1>
      {
      <Table variant="white" striped>
        <tbody>
            <tr>
               <td>S.no.</td>
               <td>Name</td>
               <td>Email</td>
               <td>Address 
                 <tr>
                   <td>Hn</td>
                   <td>City</td>
                 </tr>
               </td>
            </tr>
         {
           Students.map((data,i)=>
           <tr key="i"> 
               <td>{++i}</td>
               <td>{data.names}</td>
               <td>{data.email}</td>
               <td>
                  {
                 data.address.map((add,j)=>
                 <tr key="j">
                   <td>{add.Hn}  </td>
                   <td>{add.city}</td>

                 </tr>
                 )
               }
               </td>
              
           </tr>
             )
         }   
        </tbody>

      </Table>
      }

    </div>
  )
} export default App;