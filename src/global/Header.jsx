import React from 'react'
import { Link } from 'react-router-dom'
import { NavItem, NavLink, Container, Navbar, Nav } from 'react-bootstrap'

export default function Header() {
    return (
        <Navbar expand="lg">
            <Container>
                <Nav className="me-auto">
                    <NavItem>
                        <NavLink as={Link} to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink as={Link} to="/memes">Memes</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink as={Link} to="/about-us">About Meme Dump</NavLink>
                    </NavItem>
                </Nav>
                
            
            </Container>
        </Navbar>
    )
}
