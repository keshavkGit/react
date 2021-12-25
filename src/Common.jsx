import React from 'react'

import { Link } from "react-router-dom"

function Common(props) {
    return (
        <>
            <section id="header" className="d-flex align-items-center x-scroll-disabled y-scroll-disabled">
                <div className="Container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10  mx-auto">
                            <div className="row">
                                <div className=" col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.intro}</h1>
                                    <h1> <strong className="brand-name">{props.name}</strong> </h1>
                                    <h2 className="my-3">{props.decr}</h2>
                                    <div className="mt-3">
                                        <Link to={props.visit}>
                                            <button type="button" className="btn btn-outline-primary btn-style">{props.btnname}</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img ">
                                    <img className="img-fluid" src={props.imgsrc} alt="img" />
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </section>


        </>
    )
} export default Common;