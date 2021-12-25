import React from 'react'
import './App.css'
import {BrowserRouter as Router, Link,Route} from 'react-router-dom'
import User from './User'

function App()
{ 
  let Users=[ {id:1,name:'Anil',email:'anil@test.com'},
              {id:2,name:'Sam',email:'sam@test.com'},
              {id:3,name:'Peter',email:'peter@test.com'},
              {id:4,name:'Sidhu',email:'sidhu@test.com'}
]
  return(
    <div className="App">
      <Router>
         <h1>React dynamic Routing </h1>

         {
           Users.map((item)=>
           <div> <Link to={"/user/"+item.id+"/"+item.name}> <h3>{item.name}</h3> </Link> </div>)
         }

             <Route path="/user/:id/:name"><User/></Route>
           

      </Router>

    </div>
  )
} export default App; 