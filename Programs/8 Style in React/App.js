import './style.css'
import style from'./custom.module.css'
import React, {Component} from 'react'

class App extends Component
{
  render()
  {  
    const myStyle={
      color: "green",
      backgroundColor: "skyblue",
      padding: "10px",
      font: "arial"
    }
    return(
      <div className="App">
        <h1>Hello Style</h1>
         <h1 style={myStyle}>Style 1- javascript object added here </h1>
         <h1 className="primary">Style 2- css file added here</h1>
         <h1 style={{color:"green", backgroundColor:"black"}}>Style 3- inline css added here</h1>
         <h1 className={style.success}>Style 4- custom.module.css file added here</h1>

      </div>
    )
  }
} export default App;
