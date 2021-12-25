import React,{PureComponent} from 'react'
import Student from './Student' 

class App extends PureComponent
{
  constructor()
  {
    super();
    this.state=
        {count:1}
  }
  render()
     { 
       console.warn("check Re-rendering")
      
  return(
    <div className="App">
    <h1>Pure Component in React </h1>
    <h1>{this.state.count}</h1>
    <button onClick={()=>this.setState({count:this.state.count+1})}>Update</button>
    
    <Student data={this.state.count}/>
</div>
)
  }
} export default App;