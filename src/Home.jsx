import React from 'react'
import home from "../src/images/programmer.png"
import Common from "./Common"

function Home() {
    return (
        <>
         <Common
            intro="Hello I'm" 
            name="KESHAV KUMAR"
            decr="passionate Coder and Web Developer"
            imgsrc={home}
            visit="/about"
            btnname="About Me"
           />
           
        </>
    )
} export default Home;