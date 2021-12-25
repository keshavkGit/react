import React,{Fragment} from 'react'
import Cols from './Cols'

function App()
{
  return(
    <div className="App">
      <h1>React Fragment</h1>
      {
        <table>
           <React.Fragment>
             <>
               <Cols/>
             </>
           </React.Fragment>
        </table>
      }
    </div>
  )
}export default App;