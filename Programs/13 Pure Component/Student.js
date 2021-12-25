import React from 'react'

class Student extends React.PureComponent
{
    render()
    { console.warn("Check Re-rendering")
        return(
            <div className="App">
                <h1>Student Component </h1>
                <h1>{this.props.data}</h1>

            </div>
        )
     }
} export default Student;