import React from 'react'
import {Link,Route} from 'react-router-dom'
import './App.css'
import Nav from './Nav' 
import Home from './Home'
import About from './About'

function App()
{
  return(
    <div className="App">
      <Nav/>

      <Route path="/About"><About/></Route>
      <Route path="/" exact={true}><Home/></Route>
    
    </div>
  )
} export default App;
