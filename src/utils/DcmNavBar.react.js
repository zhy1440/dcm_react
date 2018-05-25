import React, { Component } from "react";
import { MenuItem, NavDropdown, Nav, NavItem, Navbar } from "react-bootstrap";
import TickingClock from "./TickingClock.react";
import { LinkContainer } from "react-router-bootstrap";

class DcmNavBar extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">大肠面全球购</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown eventKey={1} title="捞单录入" id="basic-nav-dropdown">
                            <LinkContainer to="/orderplace">
                                <NavItem eventKey={1.1}>新建订单</NavItem>
                            </LinkContainer>
                            <NavItem eventKey={1.1} href="#">
                                App订单补录
                            </NavItem>
                        </NavDropdown>
                        <LinkContainer to="/feedback">
                            <NavItem eventKey={2}>
                                成团反馈
                            </NavItem>
                        </LinkContainer>
                        <NavDropdown eventKey={3} title="发货" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>发货选取</MenuItem>
                            <MenuItem eventKey={3.2}>顾客资料</MenuItem>
                            <MenuItem eventKey={3.3}>余款</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            Link Right
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link Right
                        </NavItem>
                        <Navbar.Text pullRight>
                            <TickingClock />
                        </Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default DcmNavBar;
