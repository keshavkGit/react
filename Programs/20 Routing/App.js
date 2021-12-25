import React from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'

function App()
{
  return(
    <div clasName="App">
      <Router>
         <Link to="/home">Home Page</Link>
         <Link to="/about">About Page</Link>

         <Route path="/home"><Home/></Route>
         <Route path="/about"><About/></Route>
      </Router>
    </div>
  )
}

function Home()
{
  return(
    <div>
      <h1>Home Page</h1>
      <p>this is Home Page</p>
    </div>
  )
}

function About()
{
  return(
    <div>
      <h1>About Page</h1>
      <p>this is About Page</p>

    </div>
  )
}
export default App;