import React from 'react'
import web from "../src/images/web.jpg"
import Common from "./Common"

function About()
{
    return(
        <>
           <Common
            name="About Me"
            decr="Passionate about Web Development,
            Goal is to achieve a good position by doing satisfying work in the IT field,
            Strongly focused to complete the tasks in a fast-paced environment."
            imgsrc={web}
            visit="/resume"
            btnname="Resume"
           />  
             
         </>
    )
} export default About;