import React from 'react'

function Student(props)
{
    return(
        <div>
        <span>{props.item.name} </span>
        <span>{props.item.email}</span>
        </div>
    )
} export default Student;