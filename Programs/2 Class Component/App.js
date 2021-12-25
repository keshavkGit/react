import React,{Component} from 'react'
import Student2 from './Student2'
class User extends Component
{
  render()
   { return (

      <div className="App"> 
       <h1>Class Component</h1>
       <Student1/>
       <Student2/>

     </div>
       ) }
} 

class Student1 extends Component
{
  render()
  {
    return(
      <div>
        <h4>Student Component</h4>
      </div> 
    )
  }
}


export default User;
