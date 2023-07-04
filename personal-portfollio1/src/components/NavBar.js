import { Container, NavDropdown, Navbar, NavbarBrand } from "react-bootstrap"
import { useState } from "react"


export const NavBar=()=>{
    const [ActiveLink,setActiveLink]= useState('home');

    return(
        <NavBar exapand="lg">
        
                <Navbar-Brand href="#home">
                    <img src={''} alt="Logo"/>

                </Navbar-Brand>
                <NavBar.Toggle aria-controls="basic-navbar-nav"> 
                
                <span className="navbar-toggler-icon"></span>
                
                </NavBar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me=auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>

                </Nav>
                 <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src ={} alt=""/></a>
                            <a href="#"><img src ={} alt=""/></a>
                            <a href="#"><img src ={} alt=""/></a>
                        </div>
                        <button className="vvd" onClick={()=>console.log('connect')}><span>Lets Connect</span></button>

                    </span>

                   </Navbar.Collapse>
                
            
        </NavBar>
    )
}
