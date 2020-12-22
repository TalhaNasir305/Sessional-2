import React from 'react'
import { SidebarContainer,
    Icon ,
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRouter } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
       
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to="Link 1" onClick={toggle}>
                                Link 1
                        </SidebarLink>
                        <SidebarLink to="Link 2" onClick={toggle}>
                                Link 2
                        </SidebarLink>
                        <SidebarLink to="Link 3" onClick={toggle}>
                                Link 3
                        </SidebarLink>
                        <SidebarLink to="Link 4" onClick={toggle}>
                                Link 4
                        </SidebarLink>
                    </SidebarMenu>

                    <SideBtnWrap>
                        <SidebarRouter to="/signin">
                            Register Now
                        </SidebarRouter>
                    </SideBtnWrap>

                </SidebarWrapper>
            </SidebarContainer>
            
        
    )
}

export default index
