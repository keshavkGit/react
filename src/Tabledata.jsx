import React from "react"
import {Table} from "react-bootstrap"


function Tabledata(props)
{
    return(
        <>
         
                           <Table > 
                                   <tbody>
                                
                                   <tr>
                                       <td ><img src={props.imgsrc} alt="img"/> </td>
                                   <td>{props.detail}</td>

                                 </tr> 
                                 
                                 
                        </tbody>
                </Table>  
              
        </>
    )
}
export default Tabledata;
                    