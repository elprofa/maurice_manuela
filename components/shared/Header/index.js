import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import HeaderStc from './Header.stc'

import {AiOutlineMenu} from 'react-icons/ai'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <HeaderStc>
      <Navbar expand="md" className="">
        <NavbarBrand href="/">
          <img src="/img/logo.svg" height="40"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle}>
          <span className="toggle">
              <AiOutlineMenu />
          </span>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar className="block-menu">
          <Nav className="mr-0 px-0 px-md-5" navbar>
            <NavItem>
              <NavLink href="/components/">A propos de nous</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Nos projets</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Nos services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </HeaderStc>
  );
}

export default Header;