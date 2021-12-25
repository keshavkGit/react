import React from 'react'

function Student(props)
{
      const data="Anil, Sam, Peter, Sidhu";
    return(
        <div>
         <h1>student Component</h1>
         <button onClick={()=>props.alert(data)}>Click</button>
        </div>
    )
} export default Student;