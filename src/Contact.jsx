import React from 'react'
import './App.css'
import Rdata from "./Rdata"
import Tabledata from "./Tabledata"



function Contact() {
    return (
        <>
            <section  className="Container x-scroll-disabled y-scroll-disabled ">
                <div className="Container-fluid ">
                      <div className="row ">

                      <div className="col-10 mx-auto d-flex align-items-center flex-column  ">
                           
                      <div className="text-center ">
                               <img className="img-fluid rounded imgplace " src="photo.png" alt="contact" />
                               </div>
                               <div className="center">
                             
                         {
                             Rdata.map((val,i)=>
                             { return <Tabledata imgsrc={val.imgsrc}
                                 detail={val.detail}/>
                              
                  }
                                    ) }
                                    
                                    
                                    </div>
                      </div>

                      </div>
                </div>
            </section>
        </>
    )
} export default Contact;