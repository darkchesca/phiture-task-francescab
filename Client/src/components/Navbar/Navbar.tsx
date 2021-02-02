import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {BuildTeam} from '../../views/BuildTeam/BuildTeam';
import {SearchPlayers} from '../../views/SearchPlayers/SearchPlayers';
import {Navbar} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import logo from '../../logo.png';

export const NavbarCustom: React.FC = () => {

    return (
        <div className="navbar-container">
            <Router>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#"><img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Search Players</Nav.Link>
                            <Nav.Link href="/team">Build team</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Switch>
                    <Route exact path="/">
                        <SearchPlayers/>
                    </Route>
                    <Route path="/team">
                        <BuildTeam/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
