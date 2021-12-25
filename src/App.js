import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle" 
import Home from "./Home"
import About from "./About"
import Resume from "./Resume"
import Contact from "./Contact"
import Navbar from "./Navbar"
import Footer from "./Footer"
import {Switch, Route, Redirect} from "react-router-dom"

function App()
{
 return(
     <>
     <Navbar/>
     <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/resume" component={Resume}/>
        <Route exact path="/contact" component={Contact}/>
        <Redirect to="/" />
        </Switch>
        <Footer/>
     </>
 )
} export default App;