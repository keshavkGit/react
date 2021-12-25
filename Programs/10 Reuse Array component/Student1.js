import React from 'react'

function Student(props)
{
    return(
        <div>
        <h4>{props.item.name} </h4>
        <h4>{props.item.email}</h4>
        </div>
    )
} export default Student;