import React from 'react'
import {Link} from "react-router-dom"
import Accordion from "./Accordion";

function Resume() {
    return (
        <>
            <section id="header" className=" x-scroll-disabled ">
                <h1 className="resume"><Link to="React.pdf" target="-blank" download> RESUME</Link></h1>

                <div className="col-10  mx-auto">
                
                        <Accordion/>
                             
                </div>
                <div className="text-center">
                <Link to="React.pdf"  target="_blank" download> (Click to download RESUME)</Link>
                </div>

            </section>

        </>
    )
} export default Resume;