import React from 'react'
import {NavLink} from "react-router-dom"
import {GiConcentrationOrb} from 'react-icons/gi';
import {FaSearch} from 'react-icons/fa';
import {RiMenuAddLine} from 'react-icons/ri';
import Servicemodal from "./Modals/Servicemodal"

function Navbar() {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <div className="container "> 
                <div className="row align-items-center">

                    <div className="col-md-1 d-flex justify-content-end">
                        <GiConcentrationOrb size="50px" color="#1f3940"/>
                    </div>
                     <div style={{fontFamily: 'jura',fontSize:'2rem'}} className="col-md-4 d-flex justify-content-start">
                         CODEMANIAC 
                    </div>
                    <div className="col-md-5 mx-auto">
                         <ul style={{fontFamily: "Jura"}} className="navbar-items"> 
                            <li className="nav-item"> <NavLink exact className="nav-link active" aria-current="page" to="/">HOME</NavLink> </li>
                            <li className="nav-item" onMouseOver={() => setModalShow(true)}> 
                                <NavLink exact className="nav-link" to="/services">SERVICES</NavLink>
                                <Servicemodal show={modalShow} onHide={() => setModalShow(false)} />
                            </li>
                            <li className="nav-item"> <NavLink exact className="nav-link" to="/Blog">BLOG</NavLink> </li>
                            <li className="nav-item"> <NavLink exact className="nav-link" to="/contact">CONTACT</NavLink> </li>
                            <li className="nav-item"> <NavLink exact className="nav-link" to="/about">ABOUT</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-1 mx-auto d-flex justify-content-end">
                        <FaSearch color="black"/>
                    </div>
                     <div className="col-md-1 mx-auto d-flex justify-content-start">
                        <RiMenuAddLine color="black"/>
                    </div>    
                </div>
            </div> 
        </>
    )
}

export default Navbar
