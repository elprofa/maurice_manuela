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

  if(pathname!="/" && pathname!="/contact")
  {
    autre_page="block-menu autre";
  }

  return (
    <HeaderStc>
      <Navbar expand="md" className="">
        <NavbarBrand href="/" className="pl-0 pl-md-5 ml-0 ml-md-5">
          <span className="logo">
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
                  A propos de nous
                </Link>
            </NavItem>
            <NavItem className="py-2 py-md-3 align-self-center">
                <Link href="/blog/">
                  Blog
                </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar className="py-2 py-md-3 align-self-center">
              <DropdownToggle nav caret>
                Nos Service
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem >
                  <Link href="/marketing-digital">
                    Marketing digital
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/web-design">
                    Web design
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/referencement">
                    Referencement
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            
            <NavItem className="py-2 py-md-3 align-self-center">
                <Link href="/contact/">
                  Contact
                </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </HeaderStc>
  );
}

export default Header;