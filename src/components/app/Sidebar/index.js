import React from 'react';
import {
  SidebarContainer, 
  Icon, CloseIcon, 
  SidebarWrapper, 
  SidebarMenu, 
  SidebarRoute
} from "./SidebarElements"

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarRoute to="/app" onClick={toggle} >Inicio </SidebarRoute>
          <SidebarRoute to="/profile" onClick={toggle} >Perfil</SidebarRoute>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;
