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

import Link from 'next/link'

import HeaderStc from './Header.stc'

import {AiOutlineMenu} from 'react-icons/ai'
import { useRouter } from "next/router";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const router = useRouter();

  const { pathname } = router;
  
  let autre_page="block-menu";

  return (
    <HeaderStc>
      <Navbar expand="md" className="container">
        <NavbarBrand href="/" className="pl-0 pl-md-5 ml-0 ml-md-5">
          <span className="logo" style={{"color":" #ddc893 !important"}}> 
          Manuela & Maurice
          </span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle}>
          <span className="toggle">
              <AiOutlineMenu />
          </span>
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar className={autre_page}>
          <Nav className="mr-0 px-0 px-md-5" navbar>
            <NavItem className="py-2 py-md-3 align-self-center">
                <Link href="/">
                  Accueil
                </Link>
            </NavItem>
            <NavItem className="py-2 py-md-3 align-self-center">
                <Link href="/libreville/">
                  Libreville
                </Link>
            </NavItem>
            <NavItem className="py-2 py-md-3 align-self-center">
                <Link href="/abidjan">
                  Abidjan
                </Link>
            </NavItem>
            
            <NavItem className="py-2 py-md-3 align-self-center">
                <Link href="/rsvp/">
                  RSVP
                </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </HeaderStc>
  );
}

export default Header;