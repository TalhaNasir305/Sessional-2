import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer,
      NavLogo, 
      MobileIcon,
      NavMenu,
      NavItem,
      NavLinks,
      NavBtn,
      NavBtnLink
    }  from './NavBarElements';

const Navbar = ({ toggle }) => {
    return (
       <>
            <Nav>
                 <NavbarContainer>
                     <NavLogo to='/'>
                         <h1>Mr 305</h1> 
                     </NavLogo>
                     <MobileIcon onClick=(toggle)>
                         <FaBars />
                     </MobileIcon>
                     <NavMenu>
                         <NavItem>
                             ]<NavLinks to="about">Link 1</NavLinks>
                         </NavItem>
                         <NavItem>
                             ]<NavLinks to="about">Link 2</NavLinks>
                         </NavItem>
                         <NavItem>
                             ]<NavLinks to="about">Link 3</NavLinks>
                         </NavItem>
                         <NavItem>
                             ]<NavLinks to="about">Link 4</NavLinks>
                         </NavItem>
                     </NavMenu>
                            <NavBtn>
                     <NavBtnLink to="/signiin">
                               Sign In 
                     </NavBtnLink>
                           </NavBtn>
                 </NavbarContainer>
            </Nav>
       </>
    );
}; 

export default Navbar;
