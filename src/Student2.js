import React,{Component} from 'react'

class Student2 extends Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return(
            <div>
                <h4>{this.props.name} User</h4>
            </div>
        )
    }
} export default Student2;