import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Links from './Links'

const Container = styled.div.attrs({
    className: 'container',
})`width: 100%;`

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg ',
})`
    margin-bottom: 20 px;
    width: 100%;
    align-items: right;

`



const NavBar = () => {
        return (
           
                <Nav>
                    
                    <Logo />
                    <Container fluid style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <Links style={{justifyContent: 'right' }}/>
                    </Container>
                </Nav>
       
        )
    
}

export default NavBar