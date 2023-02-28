import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const Links = () => {
  
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    My first MERN Application
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/leaderboard" className="nav-link">
                                Leaderboard
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/tasks" className="nav-link">
                                Tasks
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/vote" className="nav-link">
                                Vote
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/profile" className="nav-link">
                                Profile
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        );
    
}

export default Links;