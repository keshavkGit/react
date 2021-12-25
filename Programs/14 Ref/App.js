import React,{createRef} from 'react'
import { Component } from 'react';


class App extends Component
{
  constructor()
  {
    super();
    this.inputRef=createRef()
  }

  componentDidMount()
  {
    console.warn("ref called")
  }
  getVal()
  {
       this.inputRef.current.value="Hello"
       this.inputRef.current.style.color="green"
  }
  render()
  {
    return(
      <div className="App">
        <h1>Ref in React</h1>
        <input type="text" ref={this.inputRef} />
        <button onClick={()=>this.getVal()}>Check Ref</button>
    
      </div>
    )
  }
} export default App;
